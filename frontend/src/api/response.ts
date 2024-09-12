export interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
}

export interface ApiResponseError {
    error: string;
    message: string;
    status: number;
}