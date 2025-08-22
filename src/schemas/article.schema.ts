import { z } from 'zod';

export const CreateArticleSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(20),
  tags: z.array(z.string()).max(10),
});

export type CreateArticleDtoZod = z.infer<typeof CreateArticleSchema>;
