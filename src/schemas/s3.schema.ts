import { z } from 'zod';
import { SuccessResponseSchema } from './response.schema';

export const PrepareImageUploadRequestSchema = z.object({
  filename: z.string().trim().min(1),
  contentType: z.string().trim().min(1).optional(),
});

export const PrepareImageUploadDataSchema = z.object({
  key: z.string().trim().min(1),
  uploadUrl: z.url(),
  expiresIn: z.number().int().positive(),
});

export const PrepareImageUploadResponseSchema = SuccessResponseSchema(
  PrepareImageUploadDataSchema,
);

export const ConfirmImageUploadRequestSchema = z.object({
  key: z.string().trim().min(1),
});

export const ConfirmImageUploadDataSchema = z.object({
  key: z.string().trim().min(1),
  url: z.url(),
});

export const ConfirmImageUploadResponseSchema = SuccessResponseSchema(
  ConfirmImageUploadDataSchema,
);
