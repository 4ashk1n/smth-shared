import { z } from "zod";
import { DateTimeSchema } from "./article.schema";
import { SuccessResponseSchema } from "./response.schema";
import { UserMetaSchema } from "./user.schema";

export const ReviewRemarkSchema = z.object({
  id: z.uuid(),
  articleId: z.uuid(),
  blockId: z.uuid(),
  authorId: z.uuid(),
  text: z.string().min(1),
  createdAt: DateTimeSchema,
  updatedAt: DateTimeSchema,
  author: UserMetaSchema,
});

export const ReviewRemarkUpsertSchema = z.object({
  text: z.string().trim().min(1).max(2000),
});

export const ReviewRemarkListSchema = z.array(ReviewRemarkSchema);
export const ReviewRemarkResponseSchema = SuccessResponseSchema(ReviewRemarkSchema);
export const ReviewRemarkListResponseSchema = SuccessResponseSchema(ReviewRemarkListSchema);
