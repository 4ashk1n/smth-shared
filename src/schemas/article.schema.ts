import { z } from 'zod';
import { ContentSchema } from './content.schema';
import {
  PaginatedSuccessResponseSchema,
  SuccessResponseSchema,
} from './response.schema';

export const DateTimeSchema = z.union([z.date(), z.string().datetime()]);

export const ArticleStatusSchema = z.enum([
  'published',
  'draft',
  'archived',
  'review',
]);

export const ArticleSchema = z.object({
  id: z.uuid(),
  title: z.string().min(0),
  description: z.string().nullable(),
  content: ContentSchema,
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

export const ArticleDTOSchema = ArticleSchema

/**
 * @deprecated Use `mainCategoryId`.
 */
export const ArticleLegacyMainCategoryAliasSchema = z.object({
  mainCategory: z.uuid(),
});

export const CreateArticleSchema = z.object({
  title: z.string().min(0),
  description: z.string().nullable().optional(),
  content: z.unknown(),
  authorId: z.uuid(),
  mainCategoryId: z.uuid().nullable(),
  status: ArticleStatusSchema.default('draft'),
  publishedAt: DateTimeSchema.nullable().optional(),
  categoryIds: z.array(z.uuid()).optional(),
});

export const SendForReviewSchema = z.object({
  title: z.string().min(1),
  description: z.string().nullable().optional(),
  content: ContentSchema,
  authorId: z.uuid(),
  mainCategoryId: z.uuid(),
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

export const ArticleContentResponseSchema = SuccessResponseSchema(ContentSchema);

export const ArticleReactionResponseSchema = z.object({
  articleId: z.uuid(),
  liked: z.boolean(),
  disliked: z.boolean(),
});

export const ArticleMetricsSchema = z.object({
  views: z.number().int().min(0),
  liked: z.boolean(),
  likes: z.number().int().min(0),
  comments: z.number().int().min(0),
  reposts: z.number().int().min(0),
  reposted: z.boolean(),
  saves: z.number().int().min(0),
  saved: z.boolean(),
});

export const UpdateArticleReadMetricsSchema = z
  .object({
    focusTimeDelta: z.number().int().min(0).default(0),
    viewedPagesDelta: z.number().int().min(0).default(0),
    firstViewedAt: DateTimeSchema.nullable().optional(),
    lastViewedAt: DateTimeSchema.nullable().optional(),
  })
  .refine(
    (value) =>
      value.focusTimeDelta > 0 ||
      value.viewedPagesDelta > 0 ||
      value.firstViewedAt !== undefined ||
      value.lastViewedAt !== undefined,
    {
      message: "At least one metric field must be provided",
    },
  );

export const UpdateArticleReadMetricsResponseSchema = SuccessResponseSchema(
  z.object({
    articleId: z.uuid(),
  }),
);

export const CreateEmptyDraftSchema = z.object({
  authorId: z.uuid()
});
export const CreateEmptyDraftResponseSchema = SuccessResponseSchema(z.object({
  id: z.uuid()
}));

export const UserArticleListItemSchema = ArticleMetaSchema;
export const UserPublishedArticlesListSchema = z.array(UserArticleListItemSchema);
export const UserOtherArticlesListSchema = z.array(UserArticleListItemSchema);
export const UserLikedArticlesListSchema = z.array(UserArticleListItemSchema);
export const UserSavedArticlesListSchema = z.array(UserArticleListItemSchema);
export const UserRepostedArticlesListSchema = z.array(UserArticleListItemSchema);

export const ArticleResponseSchema = SuccessResponseSchema(ArticleSchema);
export const ArticleMetaResponseSchema = SuccessResponseSchema(ArticleMetaSchema);
export const ArticleListResponseSchema = PaginatedSuccessResponseSchema(ArticleMetaSchema);
export const CreateArticleResponseSchema = SuccessResponseSchema(ArticleSchema);
export const UpdateArticleResponseSchema = SuccessResponseSchema(ArticleSchema);
export const LikeArticleResponseSchema = SuccessResponseSchema(ArticleReactionResponseSchema);
export const DislikeArticleResponseSchema = SuccessResponseSchema(ArticleReactionResponseSchema);
export const RepostArticleResponseSchema = SuccessResponseSchema(ArticleReactionResponseSchema);
export const SaveArticleResponseSchema = SuccessResponseSchema(ArticleReactionResponseSchema);

export const UserPublishedArticlesResponseSchema = SuccessResponseSchema(UserPublishedArticlesListSchema)
export const UserOtherArticlesResponseSchema = SuccessResponseSchema(UserOtherArticlesListSchema)
export const UserLikedArticlesResponseSchema = SuccessResponseSchema(UserLikedArticlesListSchema)
export const UserSavedArticlesResponseSchema = SuccessResponseSchema(UserSavedArticlesListSchema)
export const UserRepostedArticlesResponseSchema = SuccessResponseSchema(UserRepostedArticlesListSchema);

export const ArticleMetricsResponseSchema = SuccessResponseSchema(ArticleMetricsSchema);
export const UpdateArticleReadMetricsPayloadSchema = UpdateArticleReadMetricsSchema;

/**
 * @deprecated Use `LikeArticleResponseSchema`.
 */
export const LikeArticlePayloadSchema = ArticleReactionResponseSchema;

/**
 * @deprecated Use `DislikeArticleResponseSchema`.
 */
export const DislikeArticlePayloadSchema = ArticleReactionResponseSchema;

/**
 * @deprecated Use `UserPublishedArticlesListSchema` in data payloads.
 */
export const UserPublishedArticlesListLegacySchema =
  UserPublishedArticlesListSchema;

/**
 * @deprecated Use `UserOtherArticlesListSchema` in data payloads.
 */
export const UserOtherArticlesListLegacySchema = UserOtherArticlesListSchema;

/**
 * @deprecated Use `UserLikedArticlesListSchema` in data payloads.
 */
export const UserLikedArticlesListLegacySchema = UserLikedArticlesListSchema;

/**
 * @deprecated Use `UserSavedArticlesListSchema` in data payloads.
 */
export const UserSavedArticlesListLegacySchema = UserSavedArticlesListSchema;

/**
 * @deprecated Use `UserRepostedArticlesListSchema` in data payloads.
 */
export const UserRepostedArticlesListLegacySchema =
  UserRepostedArticlesListSchema;
