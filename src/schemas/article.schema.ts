import { z } from 'zod';

export const DateTimeSchema = z.union([z.date(), z.string().datetime()]);

export const ArticleStatusSchema = z.enum([
  'published',
  'draft',
  'archived',
  'review',
]);

export const ArticleSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1),
  description: z.string().nullable(),
  content: z.unknown(),
  authorId: z.uuid(),
  mainCategoryId: z.uuid(),
  categories: z.array(z.uuid()).default([]),
  status: ArticleStatusSchema,
  publishedAt: DateTimeSchema.nullable(),
  createdAt: DateTimeSchema,
  updatedAt: DateTimeSchema,
});

export const ArticleMetaSchema = ArticleSchema.pick({
  id: true,
  title: true,
  description: true,
  authorId: true,
  mainCategoryId: true,
  categories: true,
  status: true,
  publishedAt: true,
  createdAt: true,
  updatedAt: true,
});

export const ArticleDTOSchema = ArticleSchema.extend({
  topics: z.array(z.unknown()).optional(),
});

/**
 * @deprecated Use `mainCategoryId`.
 */
export const ArticleLegacyMainCategoryAliasSchema = z.object({
  mainCategory: z.uuid(),
});

export const CreateArticleSchema = z.object({
  title: z.string().min(1),
  description: z.string().nullable().optional(),
  content: z.unknown(),
  authorId: z.uuid(),
  mainCategoryId: z.uuid(),
  status: ArticleStatusSchema.default('draft'),
  publishedAt: DateTimeSchema.nullable().optional(),
  categoryIds: z.array(z.uuid()).optional(),
});

/**
 * @deprecated Use `mainCategoryId`.
 */
export const CreateArticleLegacyMainCategoryAliasSchema = z.object({
  mainCategory: z.uuid(),
});

export const UpdateArticleSchema = CreateArticleSchema.partial();

export const ArticleListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: ArticleStatusSchema.optional(),
  mainCategoryId: z.uuid().optional(),
  authorId: z.uuid().optional(),
  search: z.string().optional(),
});

export const ArticleReactionResponseSchema = z.object({
  articleId: z.uuid(),
  liked: z.boolean(),
  disliked: z.boolean(),
});

export const LikeArticleResponseSchema = ArticleReactionResponseSchema;
export const DislikeArticleResponseSchema = ArticleReactionResponseSchema;

export const UserArticleListItemSchema = ArticleMetaSchema;
export const UserPublishedArticlesResponseSchema = z.array(UserArticleListItemSchema);
export const UserOtherArticlesResponseSchema = z.array(UserArticleListItemSchema);
export const UserLikedArticlesResponseSchema = z.array(UserArticleListItemSchema);
export const UserSavedArticlesResponseSchema = z.array(UserArticleListItemSchema);
export const UserRepostedArticlesResponseSchema = z.array(UserArticleListItemSchema);
