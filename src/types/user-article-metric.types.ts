import { z } from 'zod';
import {
  CreateUserArticleMetricSchema,
  UpdateUserArticleMetricSchema,
  UserArticleMetricSchema,
} from '../schemas/user-article-metric.schema';

export type UserArticleMetric = z.infer<typeof UserArticleMetricSchema>;
export type UserArticleMetricCreate = z.infer<typeof CreateUserArticleMetricSchema>;
export type UserArticleMetricUpdate = z.infer<typeof UpdateUserArticleMetricSchema>;
