import { z } from 'zod';

export const JsonValueSchema = z.unknown();

export const TopicSchema = z.object({
    id: z.uuid(),
    articleId: z.uuid(),
    title: z.string().min(1),
    order: z.number().int(),
});

export const CreateTopicSchema = TopicSchema.omit({ id: true });
export const UpdateTopicSchema = CreateTopicSchema.partial();

export const PageSchema = z.object({
    id: z.uuid(),
    topicId: z.uuid(),
    order: z.number().int(),
});

export const CreatePageSchema = PageSchema.omit({ id: true });
export const UpdatePageSchema = CreatePageSchema.partial();

export const Object3dSchema = z.object({
    depth: z.number().int().min(1).max(5),
    translateX: z.number().int().min(1).max(5),
    translateY: z.number().int().min(1).max(5),
    translateZ: z.number().int().min(1).max(5),
    rotateX: z.number().int().min(-15).max(15),
    rotateY: z.number().int().min(-15).max(15),
    rotateZ: z.number().int().min(-15).max(15),
    scale: z.number().int().min(.5).max(1.5)
})

export const LayoutSchema = z.object({
    i: z.uuid(),
    x: z.number().int().min(0).max(1),
    y: z.number().int().min(0).max(6),
    w: z.number().int().min(1).max(2),
    h: z.number().int().min(2).max(8),
})

export const BlockSchema = z.object({
    id: z.uuid(),
    pageId: z.uuid(),
    type: z.string().min(1),
    layout: LayoutSchema,
    object3d: Object3dSchema.nullable(),
});

export const CreateBlockSchema = BlockSchema.omit({ id: true });
export const UpdateBlockSchema = CreateBlockSchema.partial();

export const BlockParagraphSchema = BlockSchema.extend({
    id: z.uuid(),
    content: z.string(),
});

export const CreateBlockParagraphSchema = BlockParagraphSchema;
export const UpdateBlockParagraphSchema = BlockParagraphSchema.partial();

export const BlockImageSchema = BlockSchema.extend({
    id: z.uuid(),
    url: z.url(),
    source: z.string().nullable(),
    sourceUrl: z.url().nullable(),
    label: z.string().nullable(),
});

export const CreateBlockImageSchema = BlockImageSchema;
export const UpdateBlockImageSchema = BlockImageSchema.partial();

export const BlockIconSchema = BlockSchema.extend({
    id: z.uuid(),
    name: z.string(),
});

export const CreateBlockIconSchema = BlockIconSchema;
export const UpdateBlockIconSchema = BlockIconSchema.partial();

export const BlockPayloadSchema = z.discriminatedUnion('type', [
    BlockSchema.extend({
        type: z.literal('paragraph'),
        paragraph: BlockParagraphSchema,
    }),
    BlockSchema.extend({
        type: z.literal('image'),
        image: BlockImageSchema,
    }),
    BlockSchema.extend({
        type: z.literal('icon'),
        icon: BlockIconSchema,
    }),
]);

export const ContentSchema = z.object({
    articleId: z.uuid(),
    topics: z.array(TopicSchema),
    pages: z.array(PageSchema),
    blocks: z.array(BlockSchema),
});
