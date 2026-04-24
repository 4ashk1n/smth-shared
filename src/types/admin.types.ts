import { z } from "zod";
import {
  AdminModerateArticleResponseSchema,
  AdminModerateUserResponseSchema,
  AdminReviewArticleListQuerySchema,
  AdminReviewArticleListResponseSchema,
  AdminUserArticleListQuerySchema,
  AdminUserArticleListResponseSchema,
  AdminUserListItemSchema,
  AdminUserListQuerySchema,
  AdminUserListResponseSchema,
} from "../schemas/admin.schema";

export type AdminReviewArticleListQuery = z.infer<typeof AdminReviewArticleListQuerySchema>;
export type AdminUserListQuery = z.infer<typeof AdminUserListQuerySchema>;
export type AdminUserArticleListQuery = z.infer<typeof AdminUserArticleListQuerySchema>;
export type AdminUserListItem = z.infer<typeof AdminUserListItemSchema>;
export type AdminModerateArticleResponse = z.infer<typeof AdminModerateArticleResponseSchema>;
export type AdminModerateUserResponse = z.infer<typeof AdminModerateUserResponseSchema>;
export type AdminReviewArticleListResponse = z.infer<typeof AdminReviewArticleListResponseSchema>;
export type AdminUserListResponse = z.infer<typeof AdminUserListResponseSchema>;
export type AdminUserArticleListResponse = z.infer<typeof AdminUserArticleListResponseSchema>;
