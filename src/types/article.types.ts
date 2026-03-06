import { z } from 'zod';
import {
  ArticleContentResponseSchema,
  ArticleDTOSchema,
  ArticleLegacyMainCategoryAliasSchema,
  ArticleListQuerySchema,
  ArticleListResponseSchema,
  ArticleMetaResponseSchema,
  ArticleMetaSchema,
  ArticleMetricsResponseSchema,
  ArticleMetricsSchema,
  ArticleReactionResponseSchema,
  ArticleResponseSchema,
  ArticleSchema,
  CreateArticleLegacyMainCategoryAliasSchema,
  CreateArticleResponseSchema,
  CreateArticleSchema,
  DislikeArticlePayloadSchema,
  DislikeArticleResponseSchema,
  LikeArticlePayloadSchema,
  LikeArticleResponseSchema,
  RepostArticleResponseSchema,
  SaveArticleResponseSchema,
  UpdateArticleResponseSchema,
  UpdateArticleSchema,
  UserArticleListItemSchema,
  UserLikedArticlesListSchema,
  UserLikedArticlesResponseSchema,
  UserOtherArticlesListSchema,
  UserOtherArticlesResponseSchema,
  UserPublishedArticlesListSchema,
  UserPublishedArticlesResponseSchema,
  UserRepostedArticlesListSchema,
  UserRepostedArticlesResponseSchema,
  UserSavedArticlesListSchema,
  UserSavedArticlesResponseSchema,
} from '../schemas/article.schema';

export type ArticleMeta = z.infer<typeof ArticleMetaSchema>;
export type Article = z.infer<typeof ArticleSchema>;
export type ArticleDTO = z.infer<typeof ArticleDTOSchema>;
export type ArticleListQuery = z.infer<typeof ArticleListQuerySchema>;

export type ArticleCreate = z.infer<typeof CreateArticleSchema>;
export type ArticleUpdate = z.infer<typeof UpdateArticleSchema>;

export type ArticleReactionResponse = z.infer<typeof ArticleReactionResponseSchema>;
export type LikeArticleResponse = z.infer<typeof LikeArticleResponseSchema>;
export type DislikeArticleResponse = z.infer<typeof DislikeArticleResponseSchema>;
export type RepostArticleResponse = z.infer<typeof RepostArticleResponseSchema>;
export type SaveArticleResponse = z.infer<typeof SaveArticleResponseSchema>;

export type LikeArticlePayload = z.infer<typeof LikeArticlePayloadSchema>;
export type DislikeArticlePayload = z.infer<typeof DislikeArticlePayloadSchema>;

export type ArticleResponse = z.infer<typeof ArticleResponseSchema>;
export type ArticleMetaResponse = z.infer<typeof ArticleMetaResponseSchema>;
export type ArticleListResponse = z.infer<typeof ArticleListResponseSchema>;
export type CreateArticleResponse = z.infer<typeof CreateArticleResponseSchema>;
export type UpdateArticleResponse = z.infer<typeof UpdateArticleResponseSchema>;

export type UserArticleListItem = z.infer<typeof UserArticleListItemSchema>;
export type UserPublishedArticlesList = z.infer<typeof UserPublishedArticlesListSchema>;
export type UserOtherArticlesList = z.infer<typeof UserOtherArticlesListSchema>;
export type UserLikedArticlesList = z.infer<typeof UserLikedArticlesListSchema>;
export type UserSavedArticlesList = z.infer<typeof UserSavedArticlesListSchema>;
export type UserRepostedArticlesList = z.infer<typeof UserRepostedArticlesListSchema>;

export type UserPublishedArticlesResponse = z.infer<typeof UserPublishedArticlesResponseSchema>;
export type UserOtherArticlesResponse = z.infer<typeof UserOtherArticlesResponseSchema>;
export type UserLikedArticlesResponse = z.infer<typeof UserLikedArticlesResponseSchema>;
export type UserSavedArticlesResponse = z.infer<typeof UserSavedArticlesResponseSchema>;
export type UserRepostedArticlesResponse = z.infer<typeof UserRepostedArticlesResponseSchema>;

export type ArticleContentResponse = z.infer<typeof ArticleContentResponseSchema>;
export type ArticleMetricsResponse = z.infer<typeof ArticleMetricsResponseSchema>;
export type ArticleMetrics = z.infer<typeof ArticleMetricsSchema>;



/**
 * @deprecated Use `mainCategoryId` fields.
 */
export type ArticleLegacyMainCategoryAlias = z.infer<typeof ArticleLegacyMainCategoryAliasSchema>;

/**
 * @deprecated Use `CreateArticleSchema` with `mainCategoryId`.
 */
export type CreateArticleLegacyMainCategoryAlias = z.infer<typeof CreateArticleLegacyMainCategoryAliasSchema>;
