// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/common-fate/granted-approvals/pkg/service/accesssvc (interfaces: EventPutter)

// Package mocks is a generated GoMock package.
package mocks

import (
	context "context"
	reflect "reflect"

	gevent "github.com/common-fate/granted-approvals/pkg/gevent"
	gomock "github.com/golang/mock/gomock"
)

// MockEventPutter is a mock of EventPutter interface.
type MockEventPutter struct {
	ctrl     *gomock.Controller
	recorder *MockEventPutterMockRecorder
}

// MockEventPutterMockRecorder is the mock recorder for MockEventPutter.
type MockEventPutterMockRecorder struct {
	mock *MockEventPutter
}

// NewMockEventPutter creates a new mock instance.
func NewMockEventPutter(ctrl *gomock.Controller) *MockEventPutter {
	mock := &MockEventPutter{ctrl: ctrl}
	mock.recorder = &MockEventPutterMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockEventPutter) EXPECT() *MockEventPutterMockRecorder {
	return m.recorder
}

// Put mocks base method.
func (m *MockEventPutter) Put(arg0 context.Context, arg1 gevent.EventTyper) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Put", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// Put indicates an expected call of Put.
func (mr *MockEventPutterMockRecorder) Put(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Put", reflect.TypeOf((*MockEventPutter)(nil).Put), arg0, arg1)
}
