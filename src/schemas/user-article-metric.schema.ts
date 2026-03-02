import { z } from 'zod';

export const UserArticleMetricSchema = z.object({
  userId: z.uuid(),
  articleId: z.uuid(),
  focusTime: z.number().int(),
  viewedPages: z.number().int(),
  liked: z.boolean(),
  saved: z.boolean(),
  disliked: z.boolean(),
  reposted: z.boolean().default(false),
  subscribed: z.boolean(),
  firstViewedAt: z.date().nullable(),
  lastViewedAt: z.date().nullable(),
  updatedAt: z.date().nullable(),
});

export const CreateUserArticleMetricSchema = UserArticleMetricSchema;
export const UpdateUserArticleMetricSchema = UserArticleMetricSchema.partial();
