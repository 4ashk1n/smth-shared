import { z } from 'zod';
import {
    BlockSchema,
    ContentSchema,
    LayoutSchema,
    Object3dSchema,
    PageSchema,
    TopicSchema,
} from '../schemas/content.schema';

export type Object3d = z.infer<typeof Object3dSchema>;
export type Layout = z.infer<typeof LayoutSchema>;
export type Block = z.infer<typeof BlockSchema>;
export type Page = z.infer<typeof PageSchema>;
export type Topic = z.infer<typeof TopicSchema>;
export type Content = z.infer<typeof ContentSchema>;
export type BlockType = Block['type'];