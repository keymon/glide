/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import type { RequestContext } from './requestContext';
import type { User } from './user';

export interface Requestv2 {
  id: string;
  context: RequestContext;
  user: User;
  createdAt: string;
  updatedAt: string;
}
