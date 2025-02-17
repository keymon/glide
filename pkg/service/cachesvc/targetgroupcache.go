package cachesvc

import (
	"context"
	"fmt"

	"github.com/common-fate/common-fate/pkg/cache"
	"github.com/common-fate/common-fate/pkg/handler"
	"github.com/common-fate/common-fate/pkg/storage"
	"github.com/common-fate/common-fate/pkg/target"
	"github.com/common-fate/ddb"
	"github.com/pkg/errors"
)

// RefreshCachedTargetGroupResources deletes any cached options and then refetches them from the available deployment.
// It updates the cached options.
// To prevent an extended period of time where options are unavailable, we only update the items, and delete any that are no longer present (fixes SOL-35)
// return true if options were refetched, false if they were already cached
func (s *Service) RefreshCachedTargetGroupResources(ctx context.Context, tg target.Group) error {

	cachedResources := storage.ListCachedTargetGroupResourceForTargetGroup{TargetGroupID: tg.ID}

	err := s.DB.All(ctx, &cachedResources)
	if err != nil && err != ddb.ErrNoItems {
		return err
	}

	type resource struct {
		resource     cache.TargetGroupResource
		shouldUpsert bool
	}

	resources := map[string]resource{}

	for _, opt := range cachedResources.Result {
		resources[opt.UniqueKey()] = resource{
			resource: opt,
		}
	}

	freshResources, err := s.fetchResources(ctx, tg)
	if err != nil {
		return err
	}
	for _, o := range freshResources {
		resources[o.UniqueKey()] = resource{
			resource:     o,
			shouldUpsert: true,
		}
	}

	upsertItems := []ddb.Keyer{}
	deleteItems := []ddb.Keyer{}
	for _, v := range resources {
		cp := v
		if v.shouldUpsert {
			upsertItems = append(upsertItems, &cp.resource)
		} else {
			deleteItems = append(deleteItems, &cp.resource)
		}
	}

	// Will create or update items
	err = s.DB.PutBatch(ctx, upsertItems...)
	if err != nil {
		return err
	}

	// Only deletes items that no longer exist
	err = s.DB.DeleteBatch(ctx, deleteItems...)
	if err != nil {
		return err
	}

	return nil
}

func (s *Service) fetchResources(ctx context.Context, tg target.Group) ([]cache.TargetGroupResource, error) {
	var tasks []string

	routeResult, err := s.RequestRouter.Route(ctx, tg)
	if err != nil {
		return nil, errors.Wrap(err, fmt.Sprintf("failed to route to a handler when fetching resources for target group %s", tg.ID))
	}

	if routeResult.Handler.ProviderDescription == nil {
		return nil, errors.New("expected ProviderDescription to not be nil")
	}
	for k := range routeResult.Handler.ProviderDescription.Schema.Resources.Loaders {
		tasks = append(tasks, k)
	}

	runtime, err := handler.GetRuntime(ctx, routeResult.Handler)
	if err != nil {
		return nil, err
	}
	rf := NewResourceFetcher(tg.ID, runtime)
	return rf.LoadResources(ctx, tasks)

}
