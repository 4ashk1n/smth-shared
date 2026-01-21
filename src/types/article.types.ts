import { z } from "zod";
import { ArticleMetaSchema, ArticleSchema } from "../schemas/article.schema";

export type ArticleMeta = z.infer<typeof ArticleMetaSchema>;
export type Article = z.infer<typeof ArticleSchema>;