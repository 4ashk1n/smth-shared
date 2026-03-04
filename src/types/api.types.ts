import type {
  ApiResponse as BaseApiResponse,
  PaginatedSuccessResponse,
} from './response.types';

export type ApiResponse<T> = BaseApiResponse<T>;
export type PaginatedResponse<T> = PaginatedSuccessResponse<T>;
