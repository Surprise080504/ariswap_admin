import { BEFORE_CONTACT, GET_CONTACTS, EDIT_CONTACT } from '../../redux/types';

const initialState = {
    contacts: null,
    contactsAuth: false,
    contact: null,
    updateAuth: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                contactsAuth: true
            }
        case EDIT_CONTACT:
            return {
                ...state,
                updateAuth: true
            }
        case BEFORE_CONTACT:
            return {
                ...state,
                contacts: null,
                contactsAuth: false,
                updateAuth: false
            }
        default:
            return {
                ...state
            }
    }
}