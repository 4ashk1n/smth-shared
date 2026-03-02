import { z } from 'zod';

export const CategoryColorsSchema = z.unknown();

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
