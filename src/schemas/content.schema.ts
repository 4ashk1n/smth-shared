import { z } from 'zod';

export const LayoutSchema = z.object({
    i: z.string(),
    x: z.number().max(1).min(0),
    y: z.number().max(7).min(0),
    w: z.number().min(1).max(2),
    h: z.number().min(2).max(8),
});

export const Object3dSchema = z.object({
    depth: z.number(),
    translateX: z.number(),
    translateY: z.number(),
    translateZ: z.number(),
    rotateX: z.number(),
    rotateY: z.number(),
    rotateZ: z.number(),
    scale: z.number(),
});

export const BlockBaseSchema = z.object({
    id: z.uuid(),
    type: z.string(),
    layout: LayoutSchema,
    object3d: Object3dSchema.optional(),
});

export const IconBlockSchema = BlockBaseSchema.extend({
    type: z.literal('icon'),
    name: z.string(),
});

export const ParagraphBlockSchema = BlockBaseSchema.extend({
    type: z.literal('paragraph'),
    content: z.any(), // Editor.js
});

export const ImageBlockSchema = BlockBaseSchema.extend({
    type: z.literal('image'),
    url: z.url(),
    source: z.string().optional(),
    sourceUrl: z.url().optional(),
    label: z.string().optional(),
});

export const BlockSchema = z.discriminatedUnion('type', [
    IconBlockSchema,
    ParagraphBlockSchema,
    ImageBlockSchema,
]);

export const PageSchema = z.object({
    id: z.uuid(),
    blocks: z.array(BlockSchema),
    topicId: z.uuid(),
    order: z.number().int().min(0),
});

export const TopicSchema = z.object({
    id: z.uuid(),
    pages: z.array(PageSchema),
    order: z.number().int().min(0),
    title: z.string().min(1).max(100),
});

export const ContentSchema = z.object({
    topics: z.array(TopicSchema),
});