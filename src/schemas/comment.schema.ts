import { z } from "zod";
import { PaginatedSuccessResponseSchema, SuccessResponseSchema } from "./response.schema";
import { UserMetaSchema } from "./user.schema";

export const ArticleCommentSchema = z.object({
  id: z.uuid(),
  articleId: z.uuid(),
  authorId: z.uuid(),
  text: z.string().min(1).max(2000),
  author: UserMetaSchema,
  createdAt: z.union([z.date(), z.string().datetime()]),
  updatedAt: z.union([z.date(), z.string().datetime()]),
});

export const CreateArticleCommentSchema = z.object({
  text: z.string().trim().min(1).max(2000),
});

export const ArticleCommentListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export const ArticleCommentResponseSchema = SuccessResponseSchema(ArticleCommentSchema);
export const ArticleCommentListResponseSchema = PaginatedSuccessResponseSchema(ArticleCommentSchema);
export const DeleteArticleCommentResponseSchema = SuccessResponseSchema(
  z.object({
    id: z.uuid(),
  }),
);
