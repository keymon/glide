package requestsv2

import (
	"fmt"

	"github.com/common-fate/common-fate/pkg/rule"
	"github.com/common-fate/common-fate/pkg/storage/keys"
	"github.com/common-fate/common-fate/pkg/types"
	"github.com/common-fate/ddb"
	"github.com/common-fate/provider-registry-sdk-go/pkg/providerregistrysdk"
)

// Status of an Access Request.
type Status string

const (
	APPROVED  Status = "APPROVED"
	DECLINED  Status = "DECLINED"
	CANCELLED Status = "CANCELLED"
	PENDING   Status = "PENDING"
)

type TargetFrom struct {
	Publisher string `json:"publisher" dynamodbav:"publisher"`
	Name      string `json:"name" dynamodbav:"name"`
	Version   string `json:"version" dynamodbav:"version"`
	Kind      string `json:"kind" dynamodbav:"kind"`
}

type Entitlement struct {
	ID           string                                     `json:"id" dynamodbav:"id"`
	Provider     TargetFrom                                 `json:"provider" dynamodbav:"provider"`
	Description  string                                     `json:"description" dynamodbav:"description"`
	OptionSchema map[string]providerregistrysdk.TargetField `json:"optionSchema" dynamodbav:"optionSchema"`
	User         string                                     `json:"user" dynamodbav:"user"`
	AccessRule   rule.AccessRule                            `json:"accessRule" dynamodbav:"accessRule"`
}

func (i *Entitlement) DDBKeys() (ddb.Keys, error) {
	keys := ddb.Keys{
		PK: keys.Entitlement.PK1,
		SK: keys.Entitlement.SK1(i.AccessRule.ID),
	}
	return keys, nil
}

type Option struct {
	Value       string     `json:"value" dynamodbav:"value"`
	Label       string     `json:"label" dynamodbav:"label"`
	Description *string    `json:"description" dynamodbav:"description"`
	Provider    TargetFrom `json:"provider" dynamodbav:"provider"`
}

func (o *Option) GetTargetFromString() string {
	return fmt.Sprintf("%s#%s#%s#%s#", o.Provider.Kind, o.Provider.Publisher, o.Provider.Name, o.Provider.Version)
}

func (i *Option) DDBKeys() (ddb.Keys, error) {
	keys := ddb.Keys{
		PK: keys.OptionsV2.PK1,
		SK: keys.OptionsV2.SK1(i.GetTargetFromString(), i.Label),
	}
	return keys, nil
}

type Requestv2 struct {
	// ID is a read-only field after the request has been created.
	ID      string         `json:"id" dynamodbav:"id"`
	Groups  []AccessGroup  `json:"groups" dynamodbav:"groups"`
	Context RequestContext `json:"context" dynamodbav:"context"`
	User    string         `json:"user" dynamodbav:"user"`
}

func (i *Requestv2) DDBKeys() (ddb.Keys, error) {
	keys := ddb.Keys{
		PK: keys.RequestV2.PK1,
		SK: keys.RequestV2.SK1(i.User, i.ID),
	}
	return keys, nil
}

type RequestContext struct {
	Purpose  string `json:"purpose" dynamodbav:"purpose"`
	Metadata string `json:"metadata" dynamodbav:"metadata"`
}

type AccessGroup struct {
	// ID is a read-only field after the request has been created.
	ID              string                `json:"id" dynamodbav:"id"`
	Request         string                `json:"request" dynamodbav:"request"`
	Grants          []Grantv2             `json:"grants" dynamodbav:"grants"`
	TimeConstraints types.TimeConstraints `json:"timeConstraints" dynamodbav:"timeConstraints"`
	Approval        string                `json:"Approval" dynamodbav:"Approval"`
}

func (i *AccessGroup) DDBKeys() (ddb.Keys, error) {
	keys := ddb.Keys{
		PK: keys.AccessGroup.PK1,
		SK: keys.AccessGroup.SK1(i.Request),
	}
	return keys, nil
}

type Grantv2 struct {
	ID          string      `json:"id" dynamodbav:"id"`
	User        string      `json:"user" dynamodbav:"user"`
	Entitlement Entitlement `json:"entitlement" dynamodbav:"entitlement"`
	Status      Status      `json:"status" dynamodbav:"status"`
	AccessGroup string      `json:"accessGroup" dynamodbav:"accessGroup"`
}

func (i *Grantv2) DDBKeys() (ddb.Keys, error) {
	keys := ddb.Keys{
		PK: keys.Grant.PK1,
		SK: keys.Grant.SK1(i.AccessGroup),
	}
	return keys, nil
}
