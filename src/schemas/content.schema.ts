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

export const BlockSchema = z.object({
    id: z.uuid(),
    pageId: z.uuid(),
    type: z.string().min(1),
    layout: JsonValueSchema.nullable(),
});

export const CreateBlockSchema = BlockSchema.omit({ id: true });
export const UpdateBlockSchema = CreateBlockSchema.partial();

export const BlockParagraphSchema = z.object({
    id: z.uuid(),
    content: z.string(),
});

export const CreateBlockParagraphSchema = BlockParagraphSchema;
export const UpdateBlockParagraphSchema = BlockParagraphSchema.partial();

export const BlockImageSchema = z.object({
    id: z.uuid(),
    url: z.string().url(),
    source: z.string().nullable(),
    sourceUrl: z.string().url().nullable(),
    label: z.string().nullable(),
});

export const CreateBlockImageSchema = BlockImageSchema;
export const UpdateBlockImageSchema = BlockImageSchema.partial();

export const BlockIconSchema = z.object({
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

export const ContentSchema = JsonValueSchema;
