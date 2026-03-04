import { z } from 'zod';
import {
  ErrorResponseSchema,
  PaginatedDataSchema,
  PaginatedSuccessResponseSchema,
  ResponseErrorSchema,
  SuccessResponseSchema,
} from '../schemas/response.schema';

export type ResponseError = z.infer<typeof ResponseErrorSchema>;
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;

export type SuccessResponse<T> = {
  success: true;
  data: T;
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export type PaginatedData<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
};

export type PaginatedSuccessResponse<T> = SuccessResponse<PaginatedData<T>>;

export type InferSuccessResponse<TSchema extends z.ZodTypeAny> = z.infer<
  ReturnType<typeof SuccessResponseSchema<TSchema>>
>;

export type InferPaginatedData<TSchema extends z.ZodTypeAny> = z.infer<
  ReturnType<typeof PaginatedDataSchema<TSchema>>
>;

export type InferPaginatedSuccessResponse<TSchema extends z.ZodTypeAny> =
  z.infer<ReturnType<typeof PaginatedSuccessResponseSchema<TSchema>>>;
