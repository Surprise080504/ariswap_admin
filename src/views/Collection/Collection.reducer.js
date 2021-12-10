import { BEFORE_COLLECTION, GET_COLLECTIONS, UPSERT_COLLECTION, DELETE_COLLECTION, GET_COLLECTION } from '../../redux/types';

const initialState = {
    collection: null,
    collections: null,
    pagination: null,
    deleteAuth: false,
    upsertAuth: false,
    getAuth: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPSERT_COLLECTION:
            return {
                ...state,
                collection: action.payload,
                upsertAuth: true
            }
        case DELETE_COLLECTION:
            return {
                ...state,
                collection: action.payload,
                deleteAuth: true
            }
        case GET_COLLECTIONS:
            return {
                ...state,
                collections: action.payload.collections,
                pagination: action.payload.pagination,
                getAuth: true
            }
        case GET_COLLECTION:
            return {
                ...state,
                collection: action.payload,
                getAuth: true
            }
        case BEFORE_COLLECTION:
            return {
                ...state,
                collection: null,
                collections: null,
                pagination: null,
                deleteAuth: false,
                upsertAuth: false,
                getAuth: false
            }
        default:
            return {
                ...state
            }
    }
}