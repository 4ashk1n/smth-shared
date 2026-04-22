import { z } from "zod";
import { PaginatedSuccessResponseSchema, SuccessResponseSchema } from "./response.schema";
import { ArticleStatusSchema } from "./article.schema";
import { UserMetaSchema } from "./user.schema";

export const NotificationTypeSchema = z.enum([
  "like",
  "subscribe",
  "comment",
  "article_status",
]);

export const NotificationPayloadSchema = z.object({
  articleId: z.uuid().optional(),
  articleTitle: z.string().optional(),
  commentId: z.uuid().optional(),
  commentText: z.string().optional(),
  fromStatus: ArticleStatusSchema.optional(),
  toStatus: ArticleStatusSchema.optional(),
});

export const NotificationSchema = z.object({
  id: z.uuid(),
  type: NotificationTypeSchema,
  recipientUserId: z.uuid(),
  actorUserId: z.uuid().nullable(),
  actor: UserMetaSchema.nullable(),
  payload: NotificationPayloadSchema,
  createdAt: z.union([z.date(), z.string().datetime()]),
  readAt: z.union([z.date(), z.string().datetime()]).nullable(),
});

export const NotificationListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export const NotificationResponseSchema = SuccessResponseSchema(NotificationSchema);
export const NotificationListResponseSchema = PaginatedSuccessResponseSchema(NotificationSchema);
export const MarkNotificationReadResponseSchema = SuccessResponseSchema(z.object({
  id: z.uuid(),
  readAt: z.union([z.date(), z.string().datetime()]),
}));
export const MarkAllNotificationsReadResponseSchema = SuccessResponseSchema(z.object({
  count: z.number().int().min(0),
}));
export const UnreadNotificationsCountResponseSchema = SuccessResponseSchema(z.object({
  count: z.number().int().min(0),
}));
