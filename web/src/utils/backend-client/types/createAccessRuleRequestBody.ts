/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import type { AccessRuleApproverConfig } from './accessRuleApproverConfig';
import type { AccessRuleTimeConstraints } from './accessRuleTimeConstraints';
import type { CreateAccessRuleTarget } from './createAccessRuleTarget';

export type CreateAccessRuleRequestBody = {
  /** The group IDs that the access rule applies to. */
  groups: string[];
  approval: AccessRuleApproverConfig;
  name: string;
  description: string;
  timeConstraints: AccessRuleTimeConstraints;
  targets: CreateAccessRuleTarget[];
  priority: number;
};
