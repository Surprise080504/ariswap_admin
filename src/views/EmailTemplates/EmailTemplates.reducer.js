import { BEFORE_EMAIL, GET_EMAILS, UPSERT_COLLECTION, DELETE_COLLECTION, GET_EMAIL, UPDATE_EMAIL } from '../../redux/types';

const initialState = {
    email: null,
    getEmailAuth: false,
    emails: null,
    pagination: null,
    deleteAuth: false,
    updateAuth: false,
    getAuth: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload.email,
                updateAuth: true
            }
        case DELETE_COLLECTION:
            return {
                ...state,
                email: action.payload,
                deleteAuth: true
            }
        case GET_EMAILS:
            return {
                ...state,
                emails: action.payload.emails,
                pagination: action.payload.pagination,
                getAuth: true
            }
        case GET_EMAIL:
            return {
                ...state,
                email: action.payload.email,
                getEmailAuth: true
            }
        case BEFORE_EMAIL:
            return {
                ...state,
                email: null,
                emails: null,
                pagination: null,
                deleteAuth: false,
                updateAuth: false,
                getAuth: false,
                getEmailAuth: false
            }
        default:
            return {
                ...state
            }
    }
}