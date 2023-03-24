import { sellerConstants } from "../constants/sellerConstants";

export const sellerReducer = (state = {user: {}}, action) => {
    switch (action.type){
        case sellerConstants.SELLER_LOGIN_REQUEST:
        case sellerConstants.SELLER_REGISTER_REQUEST:
        return {
            loading: true,
            isAuthenticated: false,
            sellerAuth: false
        };
        case sellerConstants.SELLER_LOGIN_SUCCESS:
        case sellerConstants.SELLER_REGISTER_SUCCESS:
        return {
            ...state,
            loading: false,
            isAuthenticated: true, // to allow customer actions
            sellerAuth: true, // to allow seller actions
            user: action.payload,
        };

        case sellerConstants.SELLER_LOGOUT_SUCCESS:
        return {
            loading: false,
            user: null,
            isAuthenticated: false,
            sellerAuth: false
        };
        case sellerConstants.SELLER_LOGIN_FAILURE:
        case sellerConstants.SELLER_REGISTER_FAILURE:
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload,
        };

        case sellerConstants.SELLER_LOGOUT_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };

        case sellerConstants.CLEAR_ERRORS:
        return {
            ...state,
            error: null,
        };

        default:
        return state;
    }
}