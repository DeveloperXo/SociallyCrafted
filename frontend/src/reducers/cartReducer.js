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
        case cartConstants.ADD_TO_CART:
            state = {
                ...state,
                cartItems: action.payload.cartItems
            }
            break;
    }
    return state;
}