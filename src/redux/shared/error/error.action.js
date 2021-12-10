import { GET_ERRORS, EMPTY_ERRORS } from './../../types';

export const setError = (error) => {
    return {
        type: GET_ERRORS,
        payload: error
    }
}

export const emptyError = (error) => {
    return {
        type: EMPTY_ERRORS,
        payload: error
    }
}