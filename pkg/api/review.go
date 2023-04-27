package api

import (
	"errors"
	"net/http"

	"github.com/common-fate/apikit/apio"
	"github.com/common-fate/common-fate/pkg/access"
	"github.com/common-fate/common-fate/pkg/auth"
	"github.com/common-fate/common-fate/pkg/service/accesssvc"
	"github.com/common-fate/common-fate/pkg/storage"
	"github.com/common-fate/common-fate/pkg/types"
	"github.com/common-fate/ddb"
)

// Review a request
// (POST /api/v1/access-group/{id}/review)
func (a *API) UserReviewRequest(w http.ResponseWriter, r *http.Request, requestId string, groupId string) {
	ctx := r.Context()
	var b types.UserReviewRequestJSONRequestBody
	err := apio.DecodeJSONBody(w, r, &b)
	if err != nil {
		apio.Error(ctx, w, err)
		return
	}
	user := auth.UserFromContext(ctx)

	var groupWithTargets *access.GroupWithTargets

	q := storage.GetRequestGroupWithTargetsForReviewer{RequestID: requestId, GroupID: groupId, ReviewerID: user.ID}
	_, err = a.DB.Query(ctx, &q)
	groupWithTargets = q.Result
	if err == ddb.ErrNoItems {
		err = apio.NewRequestError(err, http.StatusNotFound)
	}
	if err != nil {
		apio.Error(ctx, w, err)
		return
	}

	if groupWithTargets == nil {
		apio.Error(ctx, w, errors.New("request was nil"))
		return
	}

	var overrideTiming *access.Timing
	if b.OverrideTiming != nil {
		ot := access.TimingFromRequestTiming(*b.OverrideTiming)
		overrideTiming = &ot
	}
	_, err = a.Access.AddReviewAndGrantAccess(ctx, accesssvc.AddReviewOpts{
		ReviewerID:      user.ID,
		ReviewerEmail:   user.Email,
		Decision:        access.Decision(b.Decision),
		ReviewerIsAdmin: user.BelongsToGroup(a.AdminGroup),
		AccessGroup:     *groupWithTargets,
		Comment:         b.Comment,
		OverrideTiming:  overrideTiming,
	})
	if err == accesssvc.ErrRequestOverlapsExistingGrant {
		// wrap the error in a 400 status code
		err = apio.NewRequestError(err, http.StatusBadRequest)
	}
	if err == accesssvc.ErrUserNotAuthorized {
		// wrap the error in a 401 status code
		err = apio.NewRequestError(errors.New("you are not a reviewer of this request"), http.StatusUnauthorized)
	}
	if err != nil {
		apio.Error(ctx, w, err)
		return
	}

	// requestAPI := result.AccessGroup.ToAPI()

	// res := types.ReviewResponse{
	// 	Request: &requestAPI,
	// }

	apio.JSON(ctx, w, nil, http.StatusCreated)
}
