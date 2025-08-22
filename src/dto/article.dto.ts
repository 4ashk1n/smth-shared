import { emoji, z } from 'zod';
import { id } from 'zod/v4/locales/index.cjs';

export const GetArticleCardDTO = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  cover: z.string(),
  status: z.enum(['PUBLISHED', 'ARCHIVED', 'DRAFT']),
  author: z.object({
    id: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    username: z.string(),
    avatar: z.string()
  }),
  mainCategory: z.object({
    id: z.string(),
    name: z.string(),
    emoji: z.string(),
    lightColor: z.string(),
    darkColor: z.string(),
    accentColor: z.string()
  })
})

export type GetArticleCardDTO = z.infer<typeof GetArticleCardDTO>