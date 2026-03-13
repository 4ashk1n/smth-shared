import { z } from 'zod';
import {
  SearchArticleItemSchema,
  SearchArticlesQuerySchema,
  SearchArticlesResponseSchema,
  SearchCategoriesQuerySchema,
  SearchCategoriesResponseSchema,
  SearchCategoryItemSchema,
  SearchUserItemSchema,
  SearchUsersQuerySchema,
  SearchUsersResponseSchema,
} from '../schemas/search.schema';

export type SearchUsersQuery = z.infer<typeof SearchUsersQuerySchema>;
export type SearchArticlesQuery = z.infer<typeof SearchArticlesQuerySchema>;
export type SearchCategoriesQuery = z.infer<typeof SearchCategoriesQuerySchema>;

export type SearchUserItem = z.infer<typeof SearchUserItemSchema>;
export type SearchArticleItem = z.infer<typeof SearchArticleItemSchema>;
export type SearchCategoryItem = z.infer<typeof SearchCategoryItemSchema>;

export type SearchUsersResponse = z.infer<typeof SearchUsersResponseSchema>;
export type SearchArticlesResponse = z.infer<typeof SearchArticlesResponseSchema>;
export type SearchCategoriesResponse = z.infer<typeof SearchCategoriesResponseSchema>;
