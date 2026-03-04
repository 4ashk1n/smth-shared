import { z } from 'zod';

export const ResponseErrorSchema = z.object({
  message: z.string(),
  code: z.string().optional(),
  details: z.unknown().optional(),
});

export const ErrorResponseSchema = z.object({
  success: z.literal(false),
  error: ResponseErrorSchema,
});

export const SuccessResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.literal(true),
    data: dataSchema,
  });

export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.discriminatedUnion('success', [
    SuccessResponseSchema(dataSchema),
    ErrorResponseSchema,
  ]);

export const PaginatedDataSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    items: z.array(itemSchema),
    total: z.number().int().min(0),
    page: z.number().int().min(1),
    limit: z.number().int().min(1),
    hasMore: z.boolean(),
  });

export const PaginatedSuccessResponseSchema = <T extends z.ZodTypeAny>(
  itemSchema: T,
) => SuccessResponseSchema(PaginatedDataSchema(itemSchema));
