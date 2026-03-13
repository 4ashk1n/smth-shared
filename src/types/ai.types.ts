import { z } from 'zod';
import {
  AiSuggestionModeSchema,
  AiSuggestionRequestSchema,
  AiSuggestionSchema,
  AiSuggestionsResponseSchema,
} from '../schemas/ai.schema';

export type AiSuggestionMode = z.infer<typeof AiSuggestionModeSchema>;
export type AiSuggestionRequest = z.infer<typeof AiSuggestionRequestSchema>;
export type AiSuggestion = z.infer<typeof AiSuggestionSchema>;
export type AiSuggestionsResponse = z.infer<typeof AiSuggestionsResponseSchema>;
