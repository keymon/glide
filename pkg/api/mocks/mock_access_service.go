// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/common-fate/common-fate/pkg/api (interfaces: AccessService)

// Package mocks is a generated GoMock package.
package mocks

import (
	context "context"
	reflect "reflect"

	access "github.com/common-fate/common-fate/pkg/access"
	identity "github.com/common-fate/common-fate/pkg/identity"
	accesssvc "github.com/common-fate/common-fate/pkg/service/accesssvc"
	types "github.com/common-fate/common-fate/pkg/types"
	gomock "github.com/golang/mock/gomock"
)

// MockAccessService is a mock of AccessService interface.
type MockAccessService struct {
	ctrl     *gomock.Controller
	recorder *MockAccessServiceMockRecorder
}

// MockAccessServiceMockRecorder is the mock recorder for MockAccessService.
type MockAccessServiceMockRecorder struct {
	mock *MockAccessService
}

// NewMockAccessService creates a new mock instance.
func NewMockAccessService(ctrl *gomock.Controller) *MockAccessService {
	mock := &MockAccessService{ctrl: ctrl}
	mock.recorder = &MockAccessServiceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockAccessService) EXPECT() *MockAccessServiceMockRecorder {
	return m.recorder
}

// CancelRequest mocks base method.
func (m *MockAccessService) CancelRequest(arg0 context.Context, arg1 accesssvc.CancelRequestOpts) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CancelRequest", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// CancelRequest indicates an expected call of CancelRequest.
func (mr *MockAccessServiceMockRecorder) CancelRequest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CancelRequest", reflect.TypeOf((*MockAccessService)(nil).CancelRequest), arg0, arg1)
}

// CreateAccessTemplate mocks base method.
func (m *MockAccessService) CreateAccessTemplate(arg0 context.Context, arg1 identity.User, arg2 types.CreateAccessRequestRequest) (*access.AccessTemplate, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateAccessTemplate", arg0, arg1, arg2)
	ret0, _ := ret[0].(*access.AccessTemplate)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateAccessTemplate indicates an expected call of CreateAccessTemplate.
func (mr *MockAccessServiceMockRecorder) CreateAccessTemplate(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateAccessTemplate", reflect.TypeOf((*MockAccessService)(nil).CreateAccessTemplate), arg0, arg1, arg2)
}

// CreateRequest mocks base method.
func (m *MockAccessService) CreateRequest(arg0 context.Context, arg1 identity.User, arg2 types.CreateAccessRequestRequest) (*access.RequestWithGroupsWithTargets, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateRequest", arg0, arg1, arg2)
	ret0, _ := ret[0].(*access.RequestWithGroupsWithTargets)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateRequest indicates an expected call of CreateRequest.
func (mr *MockAccessServiceMockRecorder) CreateRequest(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateRequest", reflect.TypeOf((*MockAccessService)(nil).CreateRequest), arg0, arg1, arg2)
}

// Review mocks base method.
func (m *MockAccessService) Review(arg0 context.Context, arg1 identity.User, arg2 bool, arg3, arg4 string, arg5 types.ReviewRequest) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Review", arg0, arg1, arg2, arg3, arg4, arg5)
	ret0, _ := ret[0].(error)
	return ret0
}

// Review indicates an expected call of Review.
func (mr *MockAccessServiceMockRecorder) Review(arg0, arg1, arg2, arg3, arg4, arg5 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Review", reflect.TypeOf((*MockAccessService)(nil).Review), arg0, arg1, arg2, arg3, arg4, arg5)
}

// RevokeRequest mocks base method.
func (m *MockAccessService) RevokeRequest(arg0 context.Context, arg1 access.RequestWithGroupsWithTargets) (*access.RequestWithGroupsWithTargets, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RevokeRequest", arg0, arg1)
	ret0, _ := ret[0].(*access.RequestWithGroupsWithTargets)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// RevokeRequest indicates an expected call of RevokeRequest.
func (mr *MockAccessServiceMockRecorder) RevokeRequest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RevokeRequest", reflect.TypeOf((*MockAccessService)(nil).RevokeRequest), arg0, arg1)
}
