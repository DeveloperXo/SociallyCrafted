import { cartConstants } from "../constants/cartConstants";

const initState = {
    cartItems: {
        // 123: {
        //     _id: 123,
        //     name: 'anything',
        //     img: 'theImg',
        //     price: 'thePrice',
        //     qty: 1
        // }
    }
}

export default (state = initState, action) => {
    switch(action.type){
        case cartConstants.ADD_TO_CART_REQUEST:
            state = {
                ...state,
                updatingCart: true                
            }
            break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            state = {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
            break;
        case cartConstants.ADD_TO_CART_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                updatingCart: false
            }
            break;
        case cartConstants.RESET_CART:
            state = {
                ...initState
            }
            break;
    }
    return state;
}
// export default (state = initState, action) => {
//     switch(action.type){
//         case cartConstants.ADD_TO_CART:
//             state = {
//                 ...state,
//                 cartItems: action.payload.cartItems
//             }
//             break;
//     }
//     return state;
// }