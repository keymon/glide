/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'
import {
  RequestStatus,
  ApprovalMethod,
  AccessRuleStatus
} from '.././types'

export const getUserListRequestsUpcomingMock = () => ({requests: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestor: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestStatus)), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, requestedAt: faker.random.word(), accessRuleId: faker.random.word(), accessRuleVersion: faker.random.word(), updatedAt: faker.random.word(), grant: faker.helpers.arrayElement([{status: faker.helpers.arrayElement(['PENDING','ACTIVE','ERROR','REVOKED','EXPIRED']), subject: faker.internet.email(), provider: faker.random.word(), start: `${faker.date.past().toISOString().split('.')[0]}Z`, end: `${faker.date.past().toISOString().split('.')[0]}Z`}, undefined]), approvalMethod: faker.helpers.arrayElement([faker.helpers.arrayElement(Object.values(ApprovalMethod)), undefined])})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getUserListRequestsPastMock = () => ({requests: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestor: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestStatus)), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, requestedAt: faker.random.word(), accessRuleId: faker.random.word(), accessRuleVersion: faker.random.word(), updatedAt: faker.random.word(), grant: faker.helpers.arrayElement([{status: faker.helpers.arrayElement(['PENDING','ACTIVE','ERROR','REVOKED','EXPIRED']), subject: faker.internet.email(), provider: faker.random.word(), start: `${faker.date.past().toISOString().split('.')[0]}Z`, end: `${faker.date.past().toISOString().split('.')[0]}Z`}, undefined]), approvalMethod: faker.helpers.arrayElement([faker.helpers.arrayElement(Object.values(ApprovalMethod)), undefined])})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getAdminArchiveAccessRuleMock = () => ({id: faker.random.word(), version: faker.random.word(), status: faker.helpers.arrayElement(Object.values(AccessRuleStatus)), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), approval: {users: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))}, name: faker.random.word(), description: faker.random.word(), metadata: {createdAt: faker.random.word(), createdBy: faker.random.word(), updatedAt: faker.random.word(), updatedBy: faker.random.word(), updateMessage: faker.helpers.arrayElement([faker.random.word(), undefined])}, target: {provider: {id: faker.random.word(), type: faker.random.word()}, with: {
        'clcr58gjh000bw0s7foidc2ph': {values: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), groupings: {
        'clcr58gjh000aw0s75dhkgkkb': Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))
      }, formElement: faker.helpers.arrayElement(['INPUT','MULTISELECT'])}
      }}, timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}, isCurrent: faker.datatype.boolean()})

export const getAdminCreateProvidersetupMock = () => ({id: faker.random.word(), type: faker.random.word(), version: faker.random.word(), status: faker.helpers.arrayElement(['COMPLETE','VALIDATION_FAILED','VALIDATING','INITIAL_CONFIGURATION_IN_PROGRESS','VALIDATION_SUCEEDED']), steps: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({complete: faker.datatype.boolean()})), configValues: {}, configValidation: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), name: faker.random.word(), status: faker.helpers.arrayElement(['IN_PROGRESS','SUCCESS','PENDING','ERROR']), fieldsValidated: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), logs: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({level: faker.helpers.arrayElement(['INFO','WARNING','ERROR']), msg: faker.random.word()}))}))})

export const getAdminDeleteProvidersetupMock = () => ({id: faker.random.word(), type: faker.random.word(), version: faker.random.word(), status: faker.helpers.arrayElement(['COMPLETE','VALIDATION_FAILED','VALIDATING','INITIAL_CONFIGURATION_IN_PROGRESS','VALIDATION_SUCEEDED']), steps: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({complete: faker.datatype.boolean()})), configValues: {}, configValidation: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), name: faker.random.word(), status: faker.helpers.arrayElement(['IN_PROGRESS','SUCCESS','PENDING','ERROR']), fieldsValidated: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), logs: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({level: faker.helpers.arrayElement(['INFO','WARNING','ERROR']), msg: faker.random.word()}))}))})

export const getUserLookupAccessRuleMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({accessRule: {id: faker.random.word(), version: faker.random.word(), name: faker.random.word(), description: faker.random.word(), target: {provider: {id: faker.random.word(), type: faker.random.word()}}, timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}, isCurrent: faker.datatype.boolean()}, selectableWithOptionValues: faker.helpers.arrayElement([Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({key: faker.random.word(), value: faker.random.word()})), undefined])})))

export const getUserListFavoritesMock = () => ({next: faker.helpers.arrayElement([faker.random.word(), null]), favorites: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), name: faker.random.word(), ruleId: faker.random.word()}))})

export const getUserCreateFavoriteMock = () => ({id: faker.random.word(), name: faker.random.word(), with: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
        'clcr58gkm000kw0s75deh7916': Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))
      })), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}})

export const getUserGetFavoriteMock = () => ({id: faker.random.word(), name: faker.random.word(), with: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
        'clcr58gkq000lw0s705e5bvny': Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))
      })), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}})

export const getUserUpdateFavoriteMock = () => ({id: faker.random.word(), name: faker.random.word(), with: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
        'clcr58gkq000mw0s75gwu1x7q': Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))
      })), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}})

export const getDefaultMSW = () => [
rest.get('*/api/v1/requests/upcoming', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListRequestsUpcomingMock()),
        )
      }),rest.get('*/api/v1/requests/past', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListRequestsPastMock()),
        )
      }),rest.post('*/api/v1/admin/access-rules/:ruleId/archive', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminArchiveAccessRuleMock()),
        )
      }),rest.delete('*/api/v1/admin/groups/:groupId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/v1/admin/providersetups', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminCreateProvidersetupMock()),
        )
      }),rest.delete('*/api/v1/admin/providersetups/:providersetupId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminDeleteProvidersetupMock()),
        )
      }),rest.get('*/api/v1/access-rules/lookup', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserLookupAccessRuleMock()),
        )
      }),rest.get('*/api/v1/favorites', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListFavoritesMock()),
        )
      }),rest.post('*/api/v1/favorites', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserCreateFavoriteMock()),
        )
      }),rest.get('*/api/v1/favorites/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserGetFavoriteMock()),
        )
      }),rest.delete('*/api/v1/favorites/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.put('*/api/v1/favorites/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserUpdateFavoriteMock()),
        )
      }),]
