import { z } from 'zod';
import {
  CategoryListResponseSchema,
  CategoryListSchema,
  CategoryColorsSchema,
  CategoryResponseSchema,
  CategorySchema,
  CreateCategoryResponseSchema,
  CreateCategorySchema,
  DeleteCategoryResponseSchema,
  UpdateCategoryResponseSchema,
  UpdateCategorySchema,
} from '../schemas/category.schema';

export type CategoryColors = z.infer<typeof CategoryColorsSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type CategoryList = z.infer<typeof CategoryListSchema>;

export type CreateCategory = z.infer<typeof CreateCategorySchema>;
export type UpdateCategory = z.infer<typeof UpdateCategorySchema>;
export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;
export type CategoryListResponse = z.infer<typeof CategoryListResponseSchema>;
export type CreateCategoryResponse = z.infer<typeof CreateCategoryResponseSchema>;
export type UpdateCategoryResponse = z.infer<typeof UpdateCategoryResponseSchema>;
export type DeleteCategoryResponse = z.infer<typeof DeleteCategoryResponseSchema>;
