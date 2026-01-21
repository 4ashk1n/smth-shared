import { z } from 'zod';

export const CategoryColorsSchema = z.object({
    lightColor: z.string(),
    darkColor: z.string(),
    accentColor: z.string(),
});

export const CategorySchema = z.object({
    id: z.uuid(),
    name: z.string().min(1).max(50),
    emoji: z.string(),
    colors: CategoryColorsSchema,
});

export const CreateCategorySchema = CategorySchema.omit({ id: true });
export const UpdateCategorySchema = CreateCategorySchema.partial();