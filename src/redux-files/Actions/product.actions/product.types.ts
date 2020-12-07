import { product } from '../../../types/producttypes';

export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export type exception = {
    message: any
}

export interface failureMessage{
    message: string;
}

export interface SuccessfullRequest {
    type: typeof REQUEST_SUCCESSFUL,
    payload: product[]
}

export interface FailedRequest {
    type: typeof REQUEST_FAILURE,
    payload: exception
}

export type ProductActionTypes = SuccessfullRequest | FailedRequest;