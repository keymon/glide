package healthchecksvc

import (
	"context"
	"errors"
	"testing"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/common-fate/common-fate/pkg/handler"
	"github.com/common-fate/common-fate/pkg/providerschema"
	"github.com/common-fate/common-fate/pkg/service/healthchecksvc/mocks"
	"github.com/common-fate/common-fate/pkg/target"
	"github.com/common-fate/common-fate/pkg/types"
	"github.com/common-fate/provider-registry-sdk-go/pkg/providerregistrysdk"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
)

func TestValidateProviderSchema(t *testing.T) {
	type testcase struct {
		name       string
		schema1    target.GroupSchema
		schema2    map[string]providerregistrysdk.TargetField
		valid_want bool
	}
	ag := target.GroupSchema{Target: target.TargetSchema{Properties: map[string]target.TargetField{"1": {Resource: aws.String("abc")}}}}
	// bg := target.GroupSchema{Target: target.TargetSchema{Properties: map[string]target.TargetField{"1": {Resource: aws.String("efg")}}}}
	cg := target.GroupSchema{Target: target.TargetSchema{Properties: map[string]target.TargetField{"1": {Resource: nil}}}}
	a := map[string]providerregistrysdk.TargetField{"1": {Resource: aws.String("abc")}}
	b := map[string]providerregistrysdk.TargetField{"1": {Resource: aws.String("efg")}}
	c := map[string]providerregistrysdk.TargetField{"1": {Resource: nil}}
	testcases := []testcase{
		{name: "identical-valid", schema1: ag, schema2: a, valid_want: true},
		{name: "different-invalid", schema1: ag, schema2: b, valid_want: false},
		{name: "resource-name-nil-valid", schema1: cg, schema2: c, valid_want: true},
	}
	for _, tc := range testcases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			validity := validateProviderSchema(tc.schema1, tc.schema2)
			assert.Equal(t, tc.valid_want, validity)
		})
	}
}
func TestValidateRoute(t *testing.T) {
	type testcase struct {
		name                string
		route               target.Route
		group               target.Group
		providerDescription *providerregistrysdk.DescribeResponse
		want                target.Route
	}
	test2Route := target.Route{Kind: "test", Handler: "test-handler", Diagnostics: []target.Diagnostic{}}
	testcases := []testcase{
		{
			name:                "handler unreachable: invalid",
			route:               target.Route{},
			group:               target.Group{},
			providerDescription: nil,
			want: target.Route{
				Diagnostics: []target.Diagnostic{
					NewDiagHandlerUnreachable,
				},
			},
		},
		{
			name:  "kind schema not exist",
			route: test2Route,
			group: target.Group{},
			providerDescription: &providerregistrysdk.DescribeResponse{
				Schema: providerregistrysdk.Schema{
					Targets: &map[string]providerregistrysdk.Target{},
				},
			},
			want: test2Route.SetValidity(false).AddDiagnostic(NewDiagKindSchemaNotExist(test2Route)),
		},
		{
			name:  "route valid",
			route: test2Route,
			group: target.Group{},
			providerDescription: &providerregistrysdk.DescribeResponse{
				Schema: providerregistrysdk.Schema{
					Targets: &map[string]providerregistrysdk.Target{
						test2Route.Kind: {},
					},
				},
			},
			want: test2Route.SetValidity(true),
		},
	}
	for _, tc := range testcases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			route := validateRoute(tc.route, tc.group, tc.providerDescription)
			assert.Equal(t, tc.want, route)
		})
	}
}

func TestDescribe(t *testing.T) {
	type testcase struct {
		name             string
		handler          handler.Handler
		describeResponse *providerregistrysdk.DescribeResponse
		describeErr      error
		want             handler.Handler
	}

	test1Handler := handler.Handler{
		Diagnostics: []handler.Diagnostic{},
	}
	healthyDescribe := providerregistrysdk.DescribeResponse{
		Healthy: true,
		Schema: providerregistrysdk.Schema{
			Schema: "https://schema.commonfate.io/provider/v1alpha1",
		},
	}
	unhealthyDescribe := providerregistrysdk.DescribeResponse{
		Healthy: false,
		Diagnostics: []providerregistrysdk.DiagnosticLog{
			{
				Level: providerregistrysdk.ERROR,
				Msg:   "hello",
			},
		},
		Schema: providerregistrysdk.Schema{
			Schema: "https://schema.commonfate.io/provider/v1alpha1",
		},
	}

	incompatibleSchemaDescribe := providerregistrysdk.DescribeResponse{
		Healthy: true,
		Schema: providerregistrysdk.Schema{
			Schema: "incompatible-schema",
		},
	}

	// derive the error dynamically here, so that we don't need to update
	// this test every time we introduce additional supported schemas.
	// the important thing we want to check is that the error is surfaced
	// as a warning.
	schemaError := providerschema.IsSupported("incompatible-schema")

	testcases := []testcase{
		{
			name:        "describe failed",
			handler:     test1Handler,
			describeErr: errors.New("failed"),
			want:        test1Handler.SetHealth(false).AddDiagnostic(NewDiagFailedToDescribe(errors.New("failed"))),
		},
		{
			name:             "describe healthy",
			handler:          test1Handler,
			describeResponse: &healthyDescribe,
			want:             test1Handler.SetHealth(true).SetProviderDescription(&healthyDescribe),
		},
		{
			name:             "describe unhealthy",
			handler:          test1Handler,
			describeResponse: &unhealthyDescribe,
			want: test1Handler.SetHealth(false).AddDiagnostic(handler.Diagnostic{
				Level:   types.ERROR,
				Message: "hello",
			}).SetProviderDescription(&unhealthyDescribe),
		},
		{
			name:             "incompatible schema",
			handler:          test1Handler,
			describeResponse: &incompatibleSchemaDescribe,
			want: test1Handler.SetHealth(true).AddDiagnostic(handler.Diagnostic{
				Level:   types.WARNING,
				Message: schemaError.Error(),
			}).SetProviderDescription(&incompatibleSchemaDescribe),
		},
	}
	for _, tc := range testcases {
		tc := tc

		ctrl := gomock.NewController(t)
		r := mocks.NewMockRuntime(ctrl)
		r.EXPECT().Describe(gomock.Any()).Return(tc.describeResponse, tc.describeErr)
		t.Run(tc.name, func(t *testing.T) {
			handler := describe(context.Background(), tc.handler, r)
			assert.Equal(t, tc.want, handler)
		})
	}
}

type mockRuntimeGetter struct {
	err error
}

func (m mockRuntimeGetter) GetRuntime(ctx context.Context, handler handler.Handler) (Runtime, error) {
	return nil, m.err
}
func TestGetRuntime(t *testing.T) {
	type testcase struct {
		name    string
		handler handler.Handler
		getErr  error
		want    handler.Handler
	}

	test1Handler := handler.Handler{
		Diagnostics: []handler.Diagnostic{},
	}

	testcases := []testcase{
		{
			name:    "get failed",
			handler: test1Handler,
			getErr:  errors.New("failed"),
			want:    test1Handler.SetHealth(false).AddDiagnostic(NewDiagFailedToInitialiseRuntime(errors.New("failed"))),
		},
		{
			name:    "get ok",
			handler: test1Handler,
			want:    test1Handler,
		},
	}
	for _, tc := range testcases {
		tc := tc

		s := Service{
			RuntimeGetter: mockRuntimeGetter{err: tc.getErr},
		}
		t.Run(tc.name, func(t *testing.T) {
			handler, _ := s.getRuntime(context.Background(), tc.handler)
			assert.Equal(t, tc.want, handler)
		})
	}
}

// func TestCheck(t *testing.T) {
// 	type testcase struct {
// 		name string
// 		// database lookup return object (used to mock ErrTargetGroupDeploymentIdAlreadyExists)
// 		mockGet *storage.GetHandler
// 		// database put object (used to mock ok response)
// 		mockPut *handler.Handler
// 		// input to CreateTargetGroupDeployment
// 		give    types.RegisterHandlerRequest
// 		wantErr error
// 		want    *handler.Handler
// 	}

// 	testcases := []testcase{

// 		{
// 			name: "existing deployment found",
// 			mockGet: &storage.GetHandler{
// 				ID: "test1",
// 				Result: &handler.Handler{
// 					ID: "test1",
// 				},
// 			},
// 			give: types.RegisterHandlerRequest{
// 				Id:         "test1",
// 				AwsAccount: "123456789012",
// 			},
// 			wantErr: ErrHandlerIdAlreadyExists,
// 		},
// 		{
// 			name: "ok",
// 			mockPut: &handler.Handler{
// 				ID:         "test1",
// 				AWSAccount: "123456789011",
// 			},
// 			give: types.RegisterHandlerRequest{
// 				Id:         "test1",
// 				AwsAccount: "123456789012",
// 			},
// 			want: &handler.Handler{
// 				ID:         "test1",
// 				AWSAccount: "123456789012",
// 				Diagnostics: []handler.Diagnostic{
// 					{
// 						Level:   types.INFO,
// 						Message: "offline: lambda cannot be reached/invoked",
// 					},
// 				},
// 			},
// 		},
// 	}

// 	for _, tc := range testcases {

// 		tc := tc

// 		t.Run(tc.name, func(t *testing.T) {

// 			dbMock := ddbmock.New(t)

// 			if tc.mockGet != nil {
// 				// this is used to mock the db lookup for coverage of ErrTargetGroupDeploymentIdAlreadyExists
// 				dbMock.MockQuery(tc.mockGet)
// 			} else {
// 				// this is used to mock s.DB.Put
// 				dbMock.MockQueryWithErr(&storage.GetHandler{}, ddb.ErrNoItems)
// 			}
// 			if tc.mockPut != nil {
// 				ctx := context.Background()
// 				err := dbMock.Put(ctx, tc.mockPut)
// 				if err != nil {
// 					t.Fatal(err)
// 				}
// 			}

// 			clk := clock.NewMock()

// 			s := Service{
// 				Clock: clk,
// 				DB:    dbMock,
// 			}

// 			got, err := s.RegisterHandler(context.Background(), tc.give)

// 			if err != nil && tc.wantErr != nil {
// 				assert.Equal(t, tc.wantErr.Error(), err.Error())
// 				return
// 			}
// 			assert.Equal(t, tc.want, got)

// 		})
// 	}

// }
