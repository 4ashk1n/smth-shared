import { z } from 'zod';
import { ArticleMetaSchema } from './article.schema';
import { CategorySchema } from './category.schema';
import { PaginatedSuccessResponseSchema } from './response.schema';
import { UserMetaSchema } from './user.schema';

const SearchBaseQuerySchema = z.object({
  q: z.string().trim().min(1),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export const SearchUsersQuerySchema = SearchBaseQuerySchema;

export const SearchArticlesQuerySchema = SearchBaseQuerySchema.extend({
  categoryIds: z.preprocess((input) => {
    if (input == null || input === '') return undefined;

    if (Array.isArray(input)) {
      return input
        .flatMap((value) => String(value).split(','))
        .map((value) => value.trim())
        .filter(Boolean);
    }

    return String(input)
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean);
  }, z.array(z.uuid()).optional()),
});

export const SearchCategoriesQuerySchema = SearchBaseQuerySchema;

export const SearchUserItemSchema = UserMetaSchema;
export const SearchArticleItemSchema = ArticleMetaSchema;
export const SearchCategoryItemSchema = CategorySchema;

export const SearchUsersResponseSchema =
  PaginatedSuccessResponseSchema(SearchUserItemSchema);
export const SearchArticlesResponseSchema =
  PaginatedSuccessResponseSchema(SearchArticleItemSchema);
export const SearchCategoriesResponseSchema =
  PaginatedSuccessResponseSchema(SearchCategoryItemSchema);
