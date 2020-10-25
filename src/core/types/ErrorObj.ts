export type ErrorResponse = {
    data: ErrorData[];
    status: string;
    statusText: string;
}

export type ErrorData = {
    documentation_url: string;
    message: string;
}
