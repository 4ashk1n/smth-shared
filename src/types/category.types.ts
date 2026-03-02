import { z } from 'zod';
import {
  CategoryColorsSchema,
  CategorySchema,
  CreateCategorySchema,
  UpdateCategorySchema,
} from '../schemas/category.schema';

export type CategoryColors = z.infer<typeof CategoryColorsSchema>;
export type Category = z.infer<typeof CategorySchema>;

export type CreateCategory = z.infer<typeof CreateCategorySchema>;
export type UpdateCategory = z.infer<typeof UpdateCategorySchema>;
