/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * Approvals
 * Granted Approvals API
 * OpenAPI spec version: 1.0
 */
import useSwr,{
  SWRConfiguration,
  Key
} from 'swr'
import type {
  ListAccessRulesResponseResponse,
  AccessRule,
  ErrorResponseResponse,
  ListAccessRuleApproversResponseResponse,
  ListRequestsResponseResponse,
  UserListRequestsParams,
  CreateRequestRequestBody,
  RequestDetail,
  ReviewResponseResponse,
  ReviewRequestBody,
  CancelRequest200,
  User,
  AuthUserResponseResponse
} from '.././types'
import type {
  AccessInstructions
} from '.././types/accesshandler-openapi.yml'
import { customInstance, ErrorType } from '../../custom-instance'


  type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


  // eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * Get all access rules as an end user.
 * @summary List Access Rules
 */
export const listUserAccessRules = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListAccessRulesResponseResponse>(
      {url: `/api/v1/access-rules`, method: 'get'
    },
      options);
    }
  

export const getListUserAccessRulesKey = () => [`/api/v1/access-rules`];

    
export type ListUserAccessRulesQueryResult = NonNullable<Awaited<ReturnType<typeof listUserAccessRules>>>
export type ListUserAccessRulesQueryError = ErrorType<unknown>

export const useListUserAccessRules = <TError = ErrorType<unknown>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof listUserAccessRules>>, TError> & {swrKey: Key}, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? (() => getListUserAccessRulesKey())
  const swrFn = () => listUserAccessRules(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Get details for an Access Rule.

End users are only able to view Access Rules if they are a member of the group the rule relates to, or if they are designated as an approver for the Access Rule. If a user doesn't meet these conditions, a HTTP401 unauthorized error is returned.
 * @summary Get Access Rule
 */
export const userGetAccessRule = (
    ruleId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessRule>(
      {url: `/api/v1/access-rules/${ruleId}`, method: 'get'
    },
      options);
    }
  

export const getUserGetAccessRuleKey = (ruleId: string,) => [`/api/v1/access-rules/${ruleId}`];

    
export type UserGetAccessRuleQueryResult = NonNullable<Awaited<ReturnType<typeof userGetAccessRule>>>
export type UserGetAccessRuleQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetAccessRule = <TError = ErrorType<ErrorResponseResponse>>(
 ruleId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetAccessRule>>, TError> & {swrKey: Key}, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnable = !!(ruleId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getUserGetAccessRuleKey(ruleId) : null);
  const swrFn = () => userGetAccessRule(ruleId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Get the approvers for an access rule. 
This returns a list of user IDs.

End users are only able to view Access Rules if they are a member of the group the rule relates to, or if they are designated as an approver for the Access Rule. If a user doesn't meet these conditions, a HTTP401 unauthorized error is returned.
 * @summary List Access Rule approvers
 */
export const userGetAccessRuleApprovers = (
    ruleId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListAccessRuleApproversResponseResponse>(
      {url: `/api/v1/access-rules/${ruleId}/approvers`, method: 'get'
    },
      options);
    }
  

export const getUserGetAccessRuleApproversKey = (ruleId: string,) => [`/api/v1/access-rules/${ruleId}/approvers`];

    
export type UserGetAccessRuleApproversQueryResult = NonNullable<Awaited<ReturnType<typeof userGetAccessRuleApprovers>>>
export type UserGetAccessRuleApproversQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetAccessRuleApprovers = <TError = ErrorType<ErrorResponseResponse>>(
 ruleId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetAccessRuleApprovers>>, TError> & {swrKey: Key}, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnable = !!(ruleId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getUserGetAccessRuleApproversKey(ruleId) : null);
  const swrFn = () => userGetAccessRuleApprovers(ruleId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * List requests.
The reviewer query param allows you to fetch requests which you can review.
 * @summary List my requests
 */
export const userListRequests = (
    params?: UserListRequestsParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestsResponseResponse>(
      {url: `/api/v1/requests`, method: 'get',
        params,
    },
      options);
    }
  

export const getUserListRequestsKey = (params?: UserListRequestsParams,) => [`/api/v1/requests`, ...(params ? [params]: [])];

    
export type UserListRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof userListRequests>>>
export type UserListRequestsQueryError = ErrorType<unknown>

export const useUserListRequests = <TError = ErrorType<unknown>>(
 params?: UserListRequestsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListRequests>>, TError> & {swrKey: Key}, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? (() => getUserListRequestsKey(params))
  const swrFn = () => userListRequests(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Make a request to access something.

Users must specify an Access Rule when making a request. Users are authorized to make a request if they are in a group that the Access Rule references. Otherwise, a HTTP 404 response will be returned.
 * @summary Create a request
 */
export const userCreateRequest = (
    createRequestRequestBody: CreateRequestRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/requests`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: createRequestRequestBody
    },
      options);
    }
  

/**
 * Returns a HTTP401 response if the user is not the requestor or a reviewer.


Use /api/v1/admin/requests/{requestId} as an administrator to view information for requests not made by the current user (note: requires that the user is a Granted administrator).
 * @summary Get a request
 */
export const userGetRequest = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<RequestDetail>(
      {url: `/api/v1/requests/${requestId}`, method: 'get'
    },
      options);
    }
  

export const getUserGetRequestKey = (requestId: string,) => [`/api/v1/requests/${requestId}`];

    
export type UserGetRequestQueryResult = NonNullable<Awaited<ReturnType<typeof userGetRequest>>>
export type UserGetRequestQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetRequest = <TError = ErrorType<ErrorResponseResponse>>(
 requestId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetRequest>>, TError> & {swrKey: Key}, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnable = !!(requestId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getUserGetRequestKey(requestId) : null);
  const swrFn = () => userGetRequest(requestId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Review an access request made by a user. The reviewing user must be an approver for a request. Users cannot review their own requests, even if they are an approver for the Access Rule.
 * @summary Review a request
 */
export const reviewRequest = (
    requestId: string,
    reviewRequestBody: ReviewRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ReviewResponseResponse>(
      {url: `/api/v1/requests/${requestId}/review`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: reviewRequestBody
    },
      options);
    }
  

/**
 * Users can cancel an access request that they have created while it is in the PENDING state.
 * @summary Cancel a request
 */
export const cancelRequest = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<CancelRequest200>(
      {url: `/api/v1/requests/${requestId}/cancel`, method: 'post'
    },
      options);
    }
  

/**
 * Admins and approvers can revoke access previously approved. Effective immediately 
 * @summary Revoke an active request
 */
export const revokeRequest = (
    requestid: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/requests/${requestid}/revoke`, method: 'post'
    },
      options);
    }
  

/**
 * Get access instructions for a request.

Returns information on how to access the role or resource.
 * @summary Get Access Instructions
 */
export const getAccessInstructions = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessInstructions>(
      {url: `/api/v1/requests/${requestId}/access-instructions`, method: 'get'
    },
      options);
    }
  

export const getGetAccessInstructionsKey = (requestId: string,) => [`/api/v1/requests/${requestId}/access-instructions`];

    
export type GetAccessInstructionsQueryResult = NonNullable<Awaited<ReturnType<typeof getAccessInstructions>>>
export type GetAccessInstructionsQueryError = ErrorType<unknown>

export const useGetAccessInstructions = <TError = ErrorType<unknown>>(
 requestId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getAccessInstructions>>, TError> & {swrKey: Key}, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnable = !!(requestId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getGetAccessInstructionsKey(requestId) : null);
  const swrFn = () => getAccessInstructions(requestId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns a Granted user.
 * @summary Get a user
 */
export const getUser = (
    userId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<User>(
      {url: `/api/v1/users/${userId}`, method: 'get'
    },
      options);
    }
  

export const getGetUserKey = (userId: string,) => [`/api/v1/users/${userId}`];

    
export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>
export type GetUserQueryError = ErrorType<void>

export const useGetUser = <TError = ErrorType<void>>(
 userId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getUser>>, TError> & {swrKey: Key}, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnable = !!(userId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getGetUserKey(userId) : null);
  const swrFn = () => getUser(userId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns information about the currently logged in user.
 * @summary Get details for the current user
 */
export const getMe = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AuthUserResponseResponse>(
      {url: `/api/v1/users/me`, method: 'get'
    },
      options);
    }
  

export const getGetMeKey = () => [`/api/v1/users/me`];

    
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>
export type GetMeQueryError = ErrorType<void>

export const useGetMe = <TError = ErrorType<void>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getMe>>, TError> & {swrKey: Key}, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? (() => getGetMeKey())
  const swrFn = () => getMe(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns an access request.
 * @summary Get a request
 */
export const adminGetRequest = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<RequestDetail>(
      {url: `/api/v1/admin/requests/${requestId}`, method: 'get'
    },
      options);
    }
  

export const getAdminGetRequestKey = (requestId: string,) => [`/api/v1/admin/requests/${requestId}`];

    
export type AdminGetRequestQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetRequest>>>
export type AdminGetRequestQueryError = ErrorType<ErrorResponseResponse>

export const useAdminGetRequest = <TError = ErrorType<ErrorResponseResponse>>(
 requestId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetRequest>>, TError> & {swrKey: Key}, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnable = !!(requestId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getAdminGetRequestKey(requestId) : null);
  const swrFn = () => adminGetRequest(requestId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

