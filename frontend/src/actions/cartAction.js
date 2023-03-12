import { cartConstants } from "../constants/cartConstants";
  import axios from "axios";
  import store from '../store';

const getCartItems = () => {
    return async dispatch => {
        try{
            dispatch({type: cartConstants.ADD_TO_CART_REQUEST})
            const token = localStorage.getItem('token');
            const config = { headers: { "Content-Type": "application/json", "Authorization": `Bearer, ${token}` }};
            const res = await axios.post('http://localhost:4000/cart/getCartItems', {1:2}, config);
            if(res.status === 200){
                const { cartItems } = res.data;
                if(cartItems){
                    dispatch({type: cartConstants.ADD_TO_CART_SUCCESS, payload: { cartItems }})
                }
            }
        }catch(error){console.log(error)}
    }
}
export const addToCart = (productObject, newQty) => {
    return async (dispatch) => {
        const  { cart: { cartItems } } = store.getState();

        // const qty = cartItems[productObject._id] ? parseInt(cartItems[productObject._id].qty + newQty) : 1;
        const qty = newQty ? newQty : 1
        cartItems[productObject._id] = {
            ...productObject,
            qty
        }
        dispatch({ type: cartConstants.ADD_TO_CART_REQUEST })
            const payload = {
                cartItems: [{
                    product: productObject, // changed productObject._id to productObject to get all infos
                    quantity: qty
                }]
            }
            const token = localStorage.getItem('token');
            const config = { headers: { "Content-Type": "application/json", "Authorization": `Bearer, ${token}` } };
            const res = await axios.post('http://localhost:4000/cart/add-to-cart',  payload, config)
            if(res.status === 200){ // may be 201
                dispatch(getCartItems());
            }
            dispatch({
                type: cartConstants.ADD_TO_CART_SUCCESS,
                patload: { cartItems }
            })
    }
}
export const updateCart = () => {
    return async ( dispatch ) => {
        const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : null
        const cartItems = cart

        if(cartItems){
            const payload = {
                cartItems: Object.keys(cartItems).map((key, index) => {
                    return {
                        quantity: cartItems[key].qty,
                        product: cartItems[key]._id
                    }
                })
            }
            if(Object.keys(cartItems).length > 0){
                const res = await axios.post('http://localhost:4000/cart/add-to-cart', payload);
                if(res.status === 201){
                    dispatch(getCartItems())
                }
            }
        }
    }
}

export const removeCartItem = (payload) => {
    return async (dispatch) => {
      try {
        dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
        const token = localStorage.getItem('token')
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Bearer, ${token}` } };
        const res = await axios.post(`http://localhost:4000/cart/removeItem`,  {payload}, config );
        if (res.status === 202) {
          dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
          dispatch(getCartItems());
        } else {
          const { error } = res.data;
          dispatch({
            type: cartConstants.REMOVE_CART_ITEM_FAILURE,
            payload: { error },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
export {getCartItems}