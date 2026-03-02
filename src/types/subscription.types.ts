import { z } from 'zod';
import {
  FollowersResponseSchema,
  FollowingResponseSchema,
  SubscribeResponseSchema,
  SubscriptionItemSchema,
  SubscriptionListSchema,
  UnsubscribeResponseSchema,
  UserPreviewSchema,
} from '../schemas/subscription.schema';

export type UserPreview = z.infer<typeof UserPreviewSchema>;
export type SubscriptionItem = z.infer<typeof SubscriptionItemSchema>;
export type SubscriptionList = z.infer<typeof SubscriptionListSchema>;

export type SubscribeResponse = z.infer<typeof SubscribeResponseSchema>;
export type UnsubscribeResponse = z.infer<typeof UnsubscribeResponseSchema>;
export type FollowersResponse = z.infer<typeof FollowersResponseSchema>;
export type FollowingResponse = z.infer<typeof FollowingResponseSchema>;
