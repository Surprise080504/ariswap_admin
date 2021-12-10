import { BEFORE_CATEGORY, GET_CATEGORIES, UPSERT_CATEGORY, DELETE_CATEGORY, GET_FAQS, BEFORE_FAQ, DELETE_FAQ, CREATE_FAQ, GET_FAQ, EDIT_FAQ } from '../../redux/types';

const initialState = {
    faqs: null,
    getFaqsAuth: false,
    faq: null,
    delFaqAuth: false,
    createAuth: false,
    getFaqAuth: false,
    editFaqAuth: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FAQ:
            return {
                ...state,
                faq: action.payload.faq,
                getFaqAuth: true
            }
        case CREATE_FAQ:
            return {
                ...state,
                createAuth: true
            }
        case GET_FAQS:
            return {
                ...state,
                faqs: action.payload,
                getFaqsAuth: true
            }
        case EDIT_FAQ:
            return {
                ...state,
                faq: action.payload,
                editFaqAuth: true
            }
        case DELETE_FAQ:
            return {
                ...state,
                faq: action.payload,
                delFaqAuth: true
            }
        case BEFORE_FAQ:
            return {
                ...state,
                faqs: null,
                getFaqsAuth: false,
                faq: null,
                delFaqAuth: false,
                createAuth: false,
                getFaqAuth: false,
                editFaqAuth: false
            }
        default:
            return {
                ...state
            }
    }
}