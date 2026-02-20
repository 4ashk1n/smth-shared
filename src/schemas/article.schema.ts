import { z } from 'zod';
import { ContentSchema } from './content.schema';

export const ArticleStatusSchema = z.enum([
  'published',
  'draft', 
  'archived',
  'review',
]);

export const ArticleMetaSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1).max(20),
  description: z.string().max(48),
  mainCategory: z.string(),
  categories: z.array(z.string()),
  status: ArticleStatusSchema,
});

export const ArticleSchema = ArticleMetaSchema.extend({
  content: ContentSchema,
});

export const ArticleDTOSchema = ArticleSchema.extend({
  categories: z.array(z.any()), 
});

export const CreateArticleSchema = z.object({
  title: z.string().min(1).max(20),
  description: z.string().max(48),
  mainCategory: z.string(),
  categoryIds: z.array(z.string()),
  content: ContentSchema,
  status: ArticleStatusSchema.default('draft'),
});

export const UpdateArticleSchema = CreateArticleSchema.partial();
export const ArticleListQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
  status: ArticleStatusSchema.optional(),
  categoryId: z.string().optional(),
  authorId: z.uuid().optional(),
  search: z.string().optional(),
});