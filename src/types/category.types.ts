import z from "zod";
import { CategoryColorsSchema, CategorySchema } from "../schemas/category.schema";

export type CategoryColors = z.infer<typeof CategoryColorsSchema>;
export type Category = z.infer<typeof CategorySchema>