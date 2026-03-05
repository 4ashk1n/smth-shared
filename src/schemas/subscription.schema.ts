import { z } from 'zod';
import { DateTimeSchema } from './article.schema';
import { SuccessResponseSchema } from './response.schema';
import { UserSchema } from './user.schema';

export const UserPreviewSchema = UserSchema.pick({
  id: true,
  username: true,
  firstname: true,
  lastname: true,
  avatar: true,
});

export const SubscriptionItemSchema = z.object({
  user: UserPreviewSchema,
  subscribedAt: DateTimeSchema,
});

export const SubscriptionListSchema = z.array(SubscriptionItemSchema);

export const SubscribeResponseSchema = z.object({
  followerId: z.uuid(),
  followingId: z.uuid(),
  createdAt: DateTimeSchema,
});

export const UnsubscribeResponseSchema = z.object({
  followerId: z.uuid(),
  followingId: z.uuid(),
});

export const isSubscribedSchema = z.object({
  followerId: z.uuid(),
  followingId: z.uuid(),
  subscribed: z.boolean(),
});


export const FollowersResponseSchema = SubscriptionListSchema;
export const FollowingResponseSchema = SubscriptionListSchema;

export const SubscribeUserResponseSchema =
  SuccessResponseSchema(SubscribeResponseSchema);
export const UnsubscribeUserResponseSchema =
  SuccessResponseSchema(UnsubscribeResponseSchema);
export const UserFollowersResponseSchema =
  SuccessResponseSchema(FollowersResponseSchema);
export const UserFollowingResponseSchema =
  SuccessResponseSchema(FollowingResponseSchema);
export const isSubscribedResponseSchema =
  SuccessResponseSchema(isSubscribedSchema);

