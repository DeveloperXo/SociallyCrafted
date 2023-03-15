import { checkoutConstants } from "../constants/checkoutConstants";

export default (state = {checkoutProducts: []}, action) => {
    switch (action.type){
        case checkoutConstants.BUY_NOW:
            return {
                checkoutProducts: action.payload.productObject
            }
    }
    return state;
}