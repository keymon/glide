// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/common-fate/granted-approvals/pkg/auth (interfaces: IdentitySyncer)

// Package auth is a generated GoMock package.
package auth

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
)

// MockIdentitySyncer is a mock of IdentitySyncer interface.
type MockIdentitySyncer struct {
	ctrl     *gomock.Controller
	recorder *MockIdentitySyncerMockRecorder
}

// MockIdentitySyncerMockRecorder is the mock recorder for MockIdentitySyncer.
type MockIdentitySyncerMockRecorder struct {
	mock *MockIdentitySyncer
}

// NewMockIdentitySyncer creates a new mock instance.
func NewMockIdentitySyncer(ctrl *gomock.Controller) *MockIdentitySyncer {
	mock := &MockIdentitySyncer{ctrl: ctrl}
	mock.recorder = &MockIdentitySyncerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockIdentitySyncer) EXPECT() *MockIdentitySyncerMockRecorder {
	return m.recorder
}

// Sync mocks base method.
func (m *MockIdentitySyncer) Sync(arg0 context.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Sync", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// Sync indicates an expected call of Sync.
func (mr *MockIdentitySyncerMockRecorder) Sync(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Sync", reflect.TypeOf((*MockIdentitySyncer)(nil).Sync), arg0)
}
