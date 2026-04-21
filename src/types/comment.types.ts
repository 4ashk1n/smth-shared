import { z } from "zod";
import {
  ArticleCommentListQuerySchema,
  ArticleCommentListResponseSchema,
  ArticleCommentResponseSchema,
  ArticleCommentSchema,
  CreateArticleCommentSchema,
  DeleteArticleCommentResponseSchema,
} from "../schemas/comment.schema";

export type ArticleComment = z.infer<typeof ArticleCommentSchema>;
export type CreateArticleComment = z.infer<typeof CreateArticleCommentSchema>;
export type ArticleCommentListQuery = z.infer<typeof ArticleCommentListQuerySchema>;
export type ArticleCommentResponse = z.infer<typeof ArticleCommentResponseSchema>;
export type ArticleCommentListResponse = z.infer<typeof ArticleCommentListResponseSchema>;
export type DeleteArticleCommentResponse = z.infer<typeof DeleteArticleCommentResponseSchema>;
