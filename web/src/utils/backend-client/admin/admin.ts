/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import useSwr from 'swr'
import type {
  SWRConfiguration,
  Key
} from 'swr'
import type {
  ListAccessRulesDetailResponseResponse,
  AdminListAccessRulesParams,
  AccessRuleDetail,
  ErrorResponseResponse,
  CreateAccessRuleRequestBody,
  DeploymentVersionResponseResponse,
  ListRequestsResponseResponse,
  AdminListRequestsParams,
  User,
  AdminUpdateUserBody,
  ListUserResponseResponse,
  AdminListUsersParams,
  CreateUserRequestBody,
  ListGroupsResponseResponse,
  AdminListGroupsParams,
  Group,
  CreateGroupRequestBody,
  Provider,
  ArgSchema,
  ArgOptions,
  AdminListProviderArgOptionsParams,
  IdentityConfigurationResponseResponse,
  TGHandler,
  AdminDeleteHandler204,
  ListHandlersResponseResponse,
  RegisterHandlerRequestBody,
  TargetGroup,
  ListTargetGroupResponseResponse,
  CreateTargetGroupRequestBody,
  TargetRoute,
  CreateTargetGroupLinkBody,
  AdminRemoveTargetGroupLinkParams
} from '.././types'
import { customInstance } from '../../custom-instance'
import type { ErrorType } from '../../custom-instance'


  
  // eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * List all access rules
 * @summary List Access Rules
 */
export const adminListAccessRules = (
    params?: AdminListAccessRulesParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListAccessRulesDetailResponseResponse>(
      {url: `/api/v1/admin/access-rules`, method: 'get',
        params
    },
      options);
    }
  

export const getAdminListAccessRulesKey = (params?: AdminListAccessRulesParams,) => [`/api/v1/admin/access-rules`, ...(params ? [params]: [])];

    
export type AdminListAccessRulesQueryResult = NonNullable<Awaited<ReturnType<typeof adminListAccessRules>>>
export type AdminListAccessRulesQueryError = ErrorType<unknown>

export const useAdminListAccessRules = <TError = ErrorType<unknown>>(
 params?: AdminListAccessRulesParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminListAccessRules>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminListAccessRulesKey(params) : null);
  const swrFn = () => adminListAccessRules(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Create an access rule
 * @summary Create Access Rule
 */
export const adminCreateAccessRule = (
    createAccessRuleRequestBody: CreateAccessRuleRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessRuleDetail>(
      {url: `/api/v1/admin/access-rules`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createAccessRuleRequestBody
    },
      options);
    }
  

/**
 * Get an Access Rule.
 * @summary Get Access Rule
 */
export const adminGetAccessRule = (
    ruleId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessRuleDetail>(
      {url: `/api/v1/admin/access-rules/${ruleId}`, method: 'get'
    },
      options);
    }
  

export const getAdminGetAccessRuleKey = (ruleId: string,) => [`/api/v1/admin/access-rules/${ruleId}`];

    
export type AdminGetAccessRuleQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetAccessRule>>>
export type AdminGetAccessRuleQueryError = ErrorType<ErrorResponseResponse>

export const useAdminGetAccessRule = <TError = ErrorType<ErrorResponseResponse>>(
 ruleId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetAccessRule>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(ruleId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetAccessRuleKey(ruleId) : null);
  const swrFn = () => adminGetAccessRule(ruleId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Updates an Access Rule. Updating a rule creates a new version.
 * @summary Update Access Rule
 */
export const adminUpdateAccessRule = (
    ruleId: string,
    createAccessRuleRequestBody: CreateAccessRuleRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessRuleDetail>(
      {url: `/api/v1/admin/access-rules/${ruleId}`, method: 'put',
      headers: {'Content-Type': 'application/json', },
      data: createAccessRuleRequestBody
    },
      options);
    }
  

/**
 * Marks an access rule as archived.
Any pending requests for this access rule will be cancelled.
 * @summary Archive Access Rule
 */
export const adminArchiveAccessRule = (
    ruleId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessRuleDetail>(
      {url: `/api/v1/admin/access-rules/${ruleId}/archive`, method: 'post'
    },
      options);
    }
  

/**
 * Returns a version history for a particular Access Rule.
 * @summary Get Access Rule version history
 */
export const adminGetAccessRuleVersions = (
    ruleId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListAccessRulesDetailResponseResponse>(
      {url: `/api/v1/admin/access-rules/${ruleId}/versions`, method: 'get'
    },
      options);
    }
  

export const getAdminGetAccessRuleVersionsKey = (ruleId: string,) => [`/api/v1/admin/access-rules/${ruleId}/versions`];

    
export type AdminGetAccessRuleVersionsQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetAccessRuleVersions>>>
export type AdminGetAccessRuleVersionsQueryError = ErrorType<void>

export const useAdminGetAccessRuleVersions = <TError = ErrorType<void>>(
 ruleId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetAccessRuleVersions>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(ruleId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetAccessRuleVersionsKey(ruleId) : null);
  const swrFn = () => adminGetAccessRuleVersions(ruleId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns a specific version for an Access Rule.
 * @summary Get Access Rule Version
 */
export const adminGetAccessRuleVersion = (
    ruleId: string,
    version: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessRuleDetail>(
      {url: `/api/v1/admin/access-rules/${ruleId}/versions/${version}`, method: 'get'
    },
      options);
    }
  

export const getAdminGetAccessRuleVersionKey = (ruleId: string,
    version: string,) => [`/api/v1/admin/access-rules/${ruleId}/versions/${version}`];

    
export type AdminGetAccessRuleVersionQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetAccessRuleVersion>>>
export type AdminGetAccessRuleVersionQueryError = ErrorType<ErrorResponseResponse>

export const useAdminGetAccessRuleVersion = <TError = ErrorType<ErrorResponseResponse>>(
 ruleId: string,
    version: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetAccessRuleVersion>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(ruleId && version)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetAccessRuleVersionKey(ruleId,version) : null);
  const swrFn = () => adminGetAccessRuleVersion(ruleId,version, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns the version information
 * @summary Get deployment version details
 */
export const adminGetDeploymentVersion = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<DeploymentVersionResponseResponse>(
      {url: `/api/v1/admin/deployment/version`, method: 'get'
    },
      options);
    }
  

export const getAdminGetDeploymentVersionKey = () => [`/api/v1/admin/deployment/version`];

    
export type AdminGetDeploymentVersionQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetDeploymentVersion>>>
export type AdminGetDeploymentVersionQueryError = ErrorType<unknown>

export const useAdminGetDeploymentVersion = <TError = ErrorType<unknown>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetDeploymentVersion>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetDeploymentVersionKey() : null);
  const swrFn = () => adminGetDeploymentVersion(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Return a list of all requests
 * @summary Your GET endpoint
 */
export const adminListRequests = (
    params?: AdminListRequestsParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestsResponseResponse>(
      {url: `/api/v1/admin/requests`, method: 'get',
        params
    },
      options);
    }
  

export const getAdminListRequestsKey = (params?: AdminListRequestsParams,) => [`/api/v1/admin/requests`, ...(params ? [params]: [])];

    
export type AdminListRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof adminListRequests>>>
export type AdminListRequestsQueryError = ErrorType<unknown>

export const useAdminListRequests = <TError = ErrorType<unknown>>(
 params?: AdminListRequestsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminListRequests>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminListRequestsKey(params) : null);
  const swrFn = () => adminListRequests(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Update a user including group membership
 * @summary Update User
 */
export const adminUpdateUser = (
    userId: string,
    adminUpdateUserBody: AdminUpdateUserBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<User>(
      {url: `/api/v1/admin/users/${userId}`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: adminUpdateUserBody
    },
      options);
    }
  

/**
 * Fetch a list of users
 * @summary Returns a list of users
 */
export const adminListUsers = (
    params?: AdminListUsersParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListUserResponseResponse>(
      {url: `/api/v1/admin/users`, method: 'get',
        params
    },
      options);
    }
  

export const getAdminListUsersKey = (params?: AdminListUsersParams,) => [`/api/v1/admin/users`, ...(params ? [params]: [])];

    
export type AdminListUsersQueryResult = NonNullable<Awaited<ReturnType<typeof adminListUsers>>>
export type AdminListUsersQueryError = ErrorType<unknown>

export const useAdminListUsers = <TError = ErrorType<unknown>>(
 params?: AdminListUsersParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminListUsers>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminListUsersKey(params) : null);
  const swrFn = () => adminListUsers(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Create new user in the Cognito user pool if it is enabled.
 * @summary Create User
 */
export const adminCreateUser = (
    createUserRequestBody: CreateUserRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<User>(
      {url: `/api/v1/admin/users`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createUserRequestBody
    },
      options);
    }
  

/**
 * Lists all active groups
 * @summary List groups
 */
export const adminListGroups = (
    params?: AdminListGroupsParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListGroupsResponseResponse>(
      {url: `/api/v1/admin/groups`, method: 'get',
        params
    },
      options);
    }
  

export const getAdminListGroupsKey = (params?: AdminListGroupsParams,) => [`/api/v1/admin/groups`, ...(params ? [params]: [])];

    
export type AdminListGroupsQueryResult = NonNullable<Awaited<ReturnType<typeof adminListGroups>>>
export type AdminListGroupsQueryError = ErrorType<unknown>

export const useAdminListGroups = <TError = ErrorType<unknown>>(
 params?: AdminListGroupsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminListGroups>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminListGroupsKey(params) : null);
  const swrFn = () => adminListGroups(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Create new group in the Cognito user pool if it is enabled.
 * @summary Create Group
 */
export const adminCreateGroup = (
    createGroupRequestBody: CreateGroupRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Group>(
      {url: `/api/v1/admin/groups`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createGroupRequestBody
    },
      options);
    }
  

/**
 * Returns information for a group.
 * @summary Get Group Details
 */
export const adminGetGroup = (
    groupId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Group>(
      {url: `/api/v1/admin/groups/${groupId}`, method: 'get'
    },
      options);
    }
  

export const getAdminGetGroupKey = (groupId: string,) => [`/api/v1/admin/groups/${groupId}`];

    
export type AdminGetGroupQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetGroup>>>
export type AdminGetGroupQueryError = ErrorType<unknown>

export const useAdminGetGroup = <TError = ErrorType<unknown>>(
 groupId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetGroup>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(groupId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetGroupKey(groupId) : null);
  const swrFn = () => adminGetGroup(groupId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Update a group
 * @summary Update Group
 */
export const adminUpdateGroup = (
    groupId: string,
    createGroupRequestBody: CreateGroupRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Group>(
      {url: `/api/v1/admin/groups/${groupId}`, method: 'put',
      headers: {'Content-Type': 'application/json', },
      data: createGroupRequestBody
    },
      options);
    }
  

/**
 * Delete an internal group
 * @summary Delete Group
 */
export const adminDeleteGroup = (
    groupId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/admin/groups/${groupId}`, method: 'delete'
    },
      options);
    }
  

/**
 * List providers
 * @summary List providers
 */
export const adminListProviders = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Provider[]>(
      {url: `/api/v1/admin/providers`, method: 'get'
    },
      options);
    }
  

export const getAdminListProvidersKey = () => [`/api/v1/admin/providers`];

    
export type AdminListProvidersQueryResult = NonNullable<Awaited<ReturnType<typeof adminListProviders>>>
export type AdminListProvidersQueryError = ErrorType<ErrorResponseResponse>

export const useAdminListProviders = <TError = ErrorType<ErrorResponseResponse>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminListProviders>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminListProvidersKey() : null);
  const swrFn = () => adminListProviders(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Get provider by id
 * @summary List providers
 */
export const adminGetProvider = (
    providerId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Provider>(
      {url: `/api/v1/admin/providers/${providerId}`, method: 'get'
    },
      options);
    }
  

export const getAdminGetProviderKey = (providerId: string,) => [`/api/v1/admin/providers/${providerId}`];

    
export type AdminGetProviderQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetProvider>>>
export type AdminGetProviderQueryError = ErrorType<ErrorResponseResponse>

export const useAdminGetProvider = <TError = ErrorType<ErrorResponseResponse>>(
 providerId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetProvider>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(providerId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetProviderKey(providerId) : null);
  const swrFn = () => adminGetProvider(providerId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Gets the argSchema describing the args for this provider
 * @summary Get provider arg schema
 */
export const adminGetProviderArgs = (
    providerId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ArgSchema>(
      {url: `/api/v1/admin/providers/${providerId}/args`, method: 'get'
    },
      options);
    }
  

export const getAdminGetProviderArgsKey = (providerId: string,) => [`/api/v1/admin/providers/${providerId}/args`];

    
export type AdminGetProviderArgsQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetProviderArgs>>>
export type AdminGetProviderArgsQueryError = ErrorType<ErrorResponseResponse>

export const useAdminGetProviderArgs = <TError = ErrorType<ErrorResponseResponse>>(
 providerId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetProviderArgs>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(providerId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetProviderArgsKey(providerId) : null);
  const swrFn = () => adminGetProviderArgs(providerId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns the options for a particular Access Provider argument. The options may be cached. To refresh the cache, pass the `refresh` query parameter.
 * @summary List provider arg options
 */
export const adminListProviderArgOptions = (
    providerId: string,
    argId: string,
    params?: AdminListProviderArgOptionsParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ArgOptions>(
      {url: `/api/v1/admin/providers/${providerId}/args/${argId}/options`, method: 'get',
        params
    },
      options);
    }
  

export const getAdminListProviderArgOptionsKey = (providerId: string,
    argId: string,
    params?: AdminListProviderArgOptionsParams,) => [`/api/v1/admin/providers/${providerId}/args/${argId}/options`, ...(params ? [params]: [])];

    
export type AdminListProviderArgOptionsQueryResult = NonNullable<Awaited<ReturnType<typeof adminListProviderArgOptions>>>
export type AdminListProviderArgOptionsQueryError = ErrorType<ErrorResponseResponse>

export const useAdminListProviderArgOptions = <TError = ErrorType<ErrorResponseResponse>>(
 providerId: string,
    argId: string,
    params?: AdminListProviderArgOptionsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminListProviderArgOptions>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(providerId && argId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminListProviderArgOptionsKey(providerId,argId,params) : null);
  const swrFn = () => adminListProviderArgOptions(providerId,argId,params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Run the identity sync operation on demand
 * @summary Sync Identity
 */
export const adminSyncIdentity = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/admin/identity/sync`, method: 'post'
    },
      options);
    }
  

/**
 * Get information about the identity configuration
 * @summary Get identity configuration
 */
export const adminGetIdentityConfiguration = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<IdentityConfigurationResponseResponse>(
      {url: `/api/v1/admin/identity`, method: 'get'
    },
      options);
    }
  

export const getAdminGetIdentityConfigurationKey = () => [`/api/v1/admin/identity`];

    
export type AdminGetIdentityConfigurationQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetIdentityConfiguration>>>
export type AdminGetIdentityConfigurationQueryError = ErrorType<ErrorResponseResponse>

export const useAdminGetIdentityConfiguration = <TError = ErrorType<ErrorResponseResponse>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetIdentityConfiguration>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetIdentityConfigurationKey() : null);
  const swrFn = () => adminGetIdentityConfiguration(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Get handler
 */
export const adminGetHandler = (
    id: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<TGHandler>(
      {url: `/api/v1/admin/handlers/${id}`, method: 'get'
    },
      options);
    }
  

export const getAdminGetHandlerKey = (id: string,) => [`/api/v1/admin/handlers/${id}`];

    
export type AdminGetHandlerQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetHandler>>>
export type AdminGetHandlerQueryError = ErrorType<ErrorResponseResponse>

export const useAdminGetHandler = <TError = ErrorType<ErrorResponseResponse>>(
 id: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetHandler>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(id)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetHandlerKey(id) : null);
  const swrFn = () => adminGetHandler(id, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Removes a handler
 */
export const adminDeleteHandler = (
    id: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AdminDeleteHandler204>(
      {url: `/api/v1/admin/handlers/${id}`, method: 'delete'
    },
      options);
    }
  

/**
 * @summary Get handlers
 */
export const adminListHandlers = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListHandlersResponseResponse>(
      {url: `/api/v1/admin/handlers`, method: 'get'
    },
      options);
    }
  

export const getAdminListHandlersKey = () => [`/api/v1/admin/handlers`];

    
export type AdminListHandlersQueryResult = NonNullable<Awaited<ReturnType<typeof adminListHandlers>>>
export type AdminListHandlersQueryError = ErrorType<ErrorResponseResponse>

export const useAdminListHandlers = <TError = ErrorType<ErrorResponseResponse>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminListHandlers>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminListHandlersKey() : null);
  const swrFn = () => adminListHandlers(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Register a handler
 */
export const adminRegisterHandler = (
    registerHandlerRequestBody: RegisterHandlerRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<TGHandler>(
      {url: `/api/v1/admin/handlers`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: registerHandlerRequestBody
    },
      options);
    }
  

/**
 * @summary Get target group (detailed)
 */
export const adminGetTargetGroup = (
    id: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<TargetGroup>(
      {url: `/api/v1/admin/target-groups/${id}`, method: 'get'
    },
      options);
    }
  

export const getAdminGetTargetGroupKey = (id: string,) => [`/api/v1/admin/target-groups/${id}`];

    
export type AdminGetTargetGroupQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetTargetGroup>>>
export type AdminGetTargetGroupQueryError = ErrorType<ErrorResponseResponse>

export const useAdminGetTargetGroup = <TError = ErrorType<ErrorResponseResponse>>(
 id: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetTargetGroup>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(id)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetTargetGroupKey(id) : null);
  const swrFn = () => adminGetTargetGroup(id, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * delete target group
 * @summary delete target group
 */
export const adminDeleteTargetGroup = (
    id: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/admin/target-groups/${id}`, method: 'delete'
    },
      options);
    }
  

/**
 * @summary Get target groups
 */
export const adminListTargetGroups = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListTargetGroupResponseResponse>(
      {url: `/api/v1/admin/target-groups`, method: 'get'
    },
      options);
    }
  

export const getAdminListTargetGroupsKey = () => [`/api/v1/admin/target-groups`];

    
export type AdminListTargetGroupsQueryResult = NonNullable<Awaited<ReturnType<typeof adminListTargetGroups>>>
export type AdminListTargetGroupsQueryError = ErrorType<ErrorResponseResponse>

export const useAdminListTargetGroups = <TError = ErrorType<ErrorResponseResponse>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminListTargetGroups>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminListTargetGroupsKey() : null);
  const swrFn = () => adminListTargetGroups(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Create target group
 */
export const adminCreateTargetGroup = (
    createTargetGroupRequestBody: CreateTargetGroupRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<TargetGroup>(
      {url: `/api/v1/admin/target-groups`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createTargetGroupRequestBody
    },
      options);
    }
  

/**
 * @summary Link a target group deployment to its target group
 */
export const adminCreateTargetGroupLink = (
    id: string,
    createTargetGroupLinkBody: CreateTargetGroupLinkBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<TargetRoute>(
      {url: `/api/v1/admin/target-groups/${id}/link`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createTargetGroupLinkBody
    },
      options);
    }
  

/**
 * @summary Unlink a target group deployment from its target group
 */
export const adminRemoveTargetGroupLink = (
    id: string,
    params: AdminRemoveTargetGroupLinkParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/admin/target-groups/${id}/unlink`, method: 'post',
        params
    },
      options);
    }
  

/**
 * Runs the healthcheck for handlers
 * @summary Healthcheck Handlers
 */
export const adminHealthcheckHandlers = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/admin/healthcheck-handlers`, method: 'post'
    },
      options);
    }
  

