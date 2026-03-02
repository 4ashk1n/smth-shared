import { z } from 'zod';
import {
  BlockIconSchema,
  BlockImageSchema,
  BlockParagraphSchema,
  BlockPayloadSchema,
  BlockSchema,
  ContentSchema,
  JsonValueSchema,
  PageSchema,
  TopicSchema,
} from '../schemas/content.schema';

export type JsonValue = z.infer<typeof JsonValueSchema>;
export type Block = z.infer<typeof BlockSchema>;
export type Page = z.infer<typeof PageSchema>;
export type Topic = z.infer<typeof TopicSchema>;
export type Content = z.infer<typeof ContentSchema>;
export type BlockType = Block['type'];

export type Paragraph = z.infer<typeof BlockParagraphSchema>;
export type Image = z.infer<typeof BlockImageSchema>;
export type Icon = z.infer<typeof BlockIconSchema>;
export type BlockPayload = z.infer<typeof BlockPayloadSchema>;
