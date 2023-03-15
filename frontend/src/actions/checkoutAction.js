import { checkoutConstants } from "../constants/checkoutConstants";

export const buyProduct = (productObject) => {
    return async dispatch => {
        dispatch({type: checkoutConstants.BUY_NOW, payload: { productObject }})
    }
}