import { z } from 'zod';
import {
  FollowersResponseSchema,
  FollowingResponseSchema,
  SubscribeUserResponseSchema,
  SubscribeResponseSchema,
  SubscriptionItemSchema,
  SubscriptionListSchema,
  UnsubscribeUserResponseSchema,
  UnsubscribeResponseSchema,
  UserFollowersResponseSchema,
  UserFollowingResponseSchema,
  UserPreviewSchema,
} from '../schemas/subscription.schema';

export type UserPreview = z.infer<typeof UserPreviewSchema>;
export type SubscriptionItem = z.infer<typeof SubscriptionItemSchema>;
export type SubscriptionList = z.infer<typeof SubscriptionListSchema>;

export type SubscribeResponse = z.infer<typeof SubscribeResponseSchema>;
export type UnsubscribeResponse = z.infer<typeof UnsubscribeResponseSchema>;
export type FollowersResponse = z.infer<typeof FollowersResponseSchema>;
export type FollowingResponse = z.infer<typeof FollowingResponseSchema>;
export type SubscribeUserResponse = z.infer<typeof SubscribeUserResponseSchema>;
export type UnsubscribeUserResponse = z.infer<typeof UnsubscribeUserResponseSchema>;
export type UserFollowersResponse = z.infer<typeof UserFollowersResponseSchema>;
export type UserFollowingResponse = z.infer<typeof UserFollowingResponseSchema>;
