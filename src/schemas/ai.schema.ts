import { z } from 'zod';
import { ArticleSchema } from './article.schema';

export const AiSuggestionScopeSchema = z.enum([
  'article',
  'topic',
  'page',
  'block',
  'unknown',
]);

export const AiSuggestionCategorySchema = z.string().min(1);
export const AiSuggestionSeveritySchema = z.string().min(1);

export const AiSuggestionSchema = z.object({
  suggestionId: z.string().min(1),
  articleId: z.string().min(1),
  topicId: z.string().min(1).optional().nullable(),
  pageId: z.string().min(1).optional().nullable(),
  blockId: z.string().min(1).optional().nullable(),
  scope: AiSuggestionScopeSchema.catch('unknown'),
  category: AiSuggestionCategorySchema.catch('general'),
  severity: AiSuggestionSeveritySchema.catch('info'),
  message: z.string().min(1),
  proposedFix: z.string().optional().nullable(),
  meta: z.record(z.string(), z.unknown()).optional().default({}),
});

export const AiSuggestionsResponseSchema = z.object({
  suggestions: z.array(AiSuggestionSchema),
});

export const AiSuggestionRequestSchema = z.object({
  draftId: z.uuid(),
});

export const AiSuggestionUpstreamRequestSchema = ArticleSchema;
export const AiSuggestionModeSchema = z.enum(['layout', 'text', 'all']);
