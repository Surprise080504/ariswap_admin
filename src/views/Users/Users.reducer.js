import { BEFORE_USER, GET_USERS, UPSERT_USER, DELETE_USER } from '../../redux/types';

const initialState = {
    userId: null,
    users: null,
    pagination: null,
    deleteUserAuth: false,
    upsertUserAuth: false,
    getUserAuth: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPSERT_USER:
            return {
                ...state,
                user: action.payload,
                upsertUserAuth: true
            }
        case DELETE_USER:
            return {
                ...state,
                userId: action.payload.userId,
                deleteUserAuth: true
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload.users,
                pagination: action.payload.pagination,
                getUserAuth: true
            }
        case BEFORE_USER:
            return {
                ...state,
                user: null,
                users: null,
                pagination: null,
                deleteUserAuth: false,
                upsertUserAuth: false,
                getUserAuth: false,
                userId: null
            }
        default:
            return {
                ...state
            }
    }
}