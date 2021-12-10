import { BEFORE_CATEGORY, GET_CATEGORIES, UPSERT_CATEGORY, DELETE_CATEGORY } from '../../redux/types';

const initialState = {
    category: null,
    categories: null,
    pagination: null,
    deleteCatAuth: false,
    upsertCatAuth: false,
    getCatAuth: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPSERT_CATEGORY:
            return {
                ...state,
                category: action.payload,
                upsertCatAuth: true
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                category: action.payload,
                deleteCatAuth: true
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories,
                pagination: action.payload.pagination,
                getCatAuth: true
            }
        case BEFORE_CATEGORY:
            return {
                ...state,
                category: null,
                categories: null,
                pagination: null,
                deleteCatAuth: false,
                upsertCatAuth: false,
                getCatAuth: false
            }
        default:
            return {
                ...state
            }
    }
}