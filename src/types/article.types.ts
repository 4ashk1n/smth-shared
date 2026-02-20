import { z } from "zod";
import { ArticleMetaSchema, ArticleSchema, CreateArticleSchema, UpdateArticleSchema } from "../schemas/article.schema";

export type ArticleMeta = z.infer<typeof ArticleMetaSchema>;
export type Article = z.infer<typeof ArticleSchema>;

export type ArticleCreate = z.infer<typeof CreateArticleSchema>;
export type ArticleUpdate = z.infer<typeof UpdateArticleSchema>;