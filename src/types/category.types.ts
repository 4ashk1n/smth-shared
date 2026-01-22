import z from "zod";
import { CategoryColorsSchema, CategorySchema } from "../schemas/category.schema";

export type CategoryColors = z.infer<typeof CategoryColorsSchema>;
export type Category = z.infer<typeof CategorySchema>

export type CreateCategory = Omit<Category, "id">;
export type UpdateCategory = Partial<CreateCategory>;