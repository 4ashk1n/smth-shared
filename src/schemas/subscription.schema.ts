import { z } from 'zod';
import { DateTimeSchema } from './article.schema';
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

export const FollowersResponseSchema = SubscriptionListSchema;
export const FollowingResponseSchema = SubscriptionListSchema;
