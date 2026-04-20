import { z } from 'zod';
import {
  ConfirmImageUploadDataSchema,
  ConfirmImageUploadRequestSchema,
  ConfirmImageUploadResponseSchema,
  PrepareImageUploadDataSchema,
  PrepareImageUploadRequestSchema,
  PrepareImageUploadResponseSchema,
} from '../schemas/s3.schema';

export type S3ObjectKey = string;

export type PrepareImageUploadRequest = z.infer<
  typeof PrepareImageUploadRequestSchema
>;
export type PrepareImageUploadData = z.infer<
  typeof PrepareImageUploadDataSchema
>;
export type PrepareImageUploadResponse = z.infer<
  typeof PrepareImageUploadResponseSchema
>;

export type ConfirmImageUploadRequest = z.infer<
  typeof ConfirmImageUploadRequestSchema
>;
export type ConfirmImageUploadData = z.infer<typeof ConfirmImageUploadDataSchema>;
export type ConfirmImageUploadResponse = z.infer<
  typeof ConfirmImageUploadResponseSchema
>;
