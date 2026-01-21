export type ApiResponse<T> = {
    data: T;
    success: boolean;
    message?: string;
};

export type PaginatedResponse<T> = ApiResponse<{
    items: T[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
}>;