import { z } from "zod";
import { ArticleMetaSchema, ArticleStatusSchema, DateTimeSchema } from "./article.schema";
import { PaginatedSuccessResponseSchema, SuccessResponseSchema } from "./response.schema";
import { UserRoleSchema } from "./user.schema";

export const AdminReviewArticleListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
  authorId: z.uuid().optional(),
});

export const AdminUserListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
});

export const AdminUserArticleListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: ArticleStatusSchema.optional(),
  search: z.string().optional(),
});

export const AdminUserListItemSchema = z.object({
  id: z.uuid(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  avatar: z.string(),
  role: UserRoleSchema,
  email: z.email().nullable(),
  provider: z.string().nullable(),
  isBanned: z.boolean(),
  bannedAt: DateTimeSchema.nullable(),
  createdAt: DateTimeSchema,
  updatedAt: DateTimeSchema,
});

export const AdminModerateArticleResponseSchema = SuccessResponseSchema(ArticleMetaSchema);
export const AdminModerateUserResponseSchema = SuccessResponseSchema(AdminUserListItemSchema);
export const AdminReviewArticleListResponseSchema = PaginatedSuccessResponseSchema(ArticleMetaSchema);
export const AdminUserListResponseSchema = PaginatedSuccessResponseSchema(AdminUserListItemSchema);
export const AdminUserArticleListResponseSchema = PaginatedSuccessResponseSchema(ArticleMetaSchema);
