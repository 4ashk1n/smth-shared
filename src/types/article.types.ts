import { z } from 'zod';
import {
  ArticleDTOSchema,
  ArticleLegacyMainCategoryAliasSchema,
  ArticleListQuerySchema,
  ArticleMetaSchema,
  ArticleReactionResponseSchema,
  ArticleSchema,
  CreateArticleLegacyMainCategoryAliasSchema,
  CreateArticleSchema,
  DislikeArticleResponseSchema,
  LikeArticleResponseSchema,
  UpdateArticleSchema,
  UserArticleListItemSchema,
  UserLikedArticlesResponseSchema,
  UserOtherArticlesResponseSchema,
  UserPublishedArticlesResponseSchema,
  UserRepostedArticlesResponseSchema,
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

export type UserArticleListItem = z.infer<typeof UserArticleListItemSchema>;
export type UserPublishedArticlesResponse = z.infer<typeof UserPublishedArticlesResponseSchema>;
export type UserOtherArticlesResponse = z.infer<typeof UserOtherArticlesResponseSchema>;
export type UserLikedArticlesResponse = z.infer<typeof UserLikedArticlesResponseSchema>;
export type UserSavedArticlesResponse = z.infer<typeof UserSavedArticlesResponseSchema>;
export type UserRepostedArticlesResponse = z.infer<typeof UserRepostedArticlesResponseSchema>;

/**
 * @deprecated Use `mainCategoryId` fields.
 */
export type ArticleLegacyMainCategoryAlias = z.infer<typeof ArticleLegacyMainCategoryAliasSchema>;

/**
 * @deprecated Use `CreateArticleSchema` with `mainCategoryId`.
 */
export type CreateArticleLegacyMainCategoryAlias = z.infer<typeof CreateArticleLegacyMainCategoryAliasSchema>;
