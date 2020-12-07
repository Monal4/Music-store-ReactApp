export const SIGNED_IN = 'SIGNED_IN';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export interface SignedIn {
    type: typeof SIGNED_IN
};

export interface RequestFailed {
    type: typeof REQUEST_FAILED
    payload: string
};

export type UserActionTypes = SignedIn | RequestFailed;