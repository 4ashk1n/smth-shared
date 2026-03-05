import { z } from 'zod';
import { SuccessResponseSchema } from './response.schema';

export const CategoryColorsSchema = z.object({
  accentColor: z.string(),
  darkColor: z.string(),
  lightColor: z.string(),
});

export const CategorySchema = z.object({
  id: z.uuid(),
  name: z.string().min(1),
  emoji: z.string(),
  colors: CategoryColorsSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateCategorySchema = CategorySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateCategorySchema = CreateCategorySchema.partial();

export const CategoryListSchema = z.array(CategorySchema);

export const CategoryResponseSchema = SuccessResponseSchema(CategorySchema);
export const CategoryListResponseSchema =
  SuccessResponseSchema(CategoryListSchema);
export const CreateCategoryResponseSchema = SuccessResponseSchema(CategorySchema);
export const UpdateCategoryResponseSchema = SuccessResponseSchema(CategorySchema);
export const DeleteCategoryResponseSchema = SuccessResponseSchema(
  z.object({
    id: z.uuid(),
  }),
);
