import { z } from 'zod';

export const UserFeedSchema = z.object({
  id: z.uuid(),
  position: z.number().int(),
  articleId: z.uuid(),
  userId: z.uuid(),
  score: z.number(),
  createdAt: z.date(),
});

export const CreateUserFeedSchema = UserFeedSchema.omit({
  id: true,
  createdAt: true,
});

export const UpdateUserFeedSchema = CreateUserFeedSchema.partial();
