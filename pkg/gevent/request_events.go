package gevent

import "github.com/common-fate/granted-approvals/pkg/access"

const (
	RequestCreatedType  = "request.created"
	RequestApprovedType = "request.approved"
)

// RequestCreated is emitted when a user requests access
// to something in the Approvals service.
type RequestCreated struct {
	Request access.Request `json:"request"`
}

func (RequestCreated) EventType() string {
	return RequestCreatedType
}

// RequestApproved is emitted when a
// user's request is approved.
type RequestApproved struct {
	Request access.Request `json:"request"`
}

func (RequestApproved) EventType() string {
	return RequestApprovedType
}

// RequestEventPayload is a payload which is common to
// all Request events. It is used to conveniently unmarshal
// the Request payloads in our event handler code.
type RequestEventPayload struct {
	Request access.Request `json:"request"`
}
