import { BEFORE_ADMIN, LOGIN_ADMIN, GET_ADMIN, UPDATE_ADMIN, UPDATE_PASSWORD, FORGOT_PASSWORD, RESET_PASSWORD } from '../../redux/types';

const initialState = {
    admin: null,
    loginAdminAuth: false,
    updateAdminAuth: false,
    updatePasswordAuth: false,
    getAuth: false,
    forgotPassword: null,
    forgotPasswordAuth: false,
    resetPasswordAuth: false,
    forgotMsg: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_ADMIN:
            return {
                ...state,
                admin: action.payload,
                updateAdminAuth: true
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                admin: action.payload,
                updatePasswordAuth: true
            }
        case LOGIN_ADMIN:
            return {
                ...state,
                admin: action.payload,
                loginAdminAuth: true
            }
        case GET_ADMIN:
            return {
                ...state,
                admin: action.payload,
                getAuth: true
            }
        case BEFORE_ADMIN:
            return {
                ...state,
                admin: null,
                loginAdminAuth: false,
                getAuth: false,
                forgotPasswordAuth: false,
                resetPasswordAuth: false
            }
        case FORGOT_PASSWORD:
            return {
                ...state,
                forgotPasswordAuth: true,
                forgotMsg: action.msg
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPasswordAuth: true
            }
        default:
            return {
                ...state
            }
    }
}