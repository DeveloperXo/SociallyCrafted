import { cartConstants } from "../constants/cartConstants";
import store from '../store';
// import { useDispatch } from "react-redux";


export const addToCart = (productObject) => {
    // const dispatch = useDispatch();
    return async (dispatch) => {
        const  {cartItems } = store.getState().cart;
        console.log('action::products', cartItems);
        // const product = action.payload.product;
        // const products = state.cartItems;

        const qty = cartItems[productObject._id] ? parseInt(cartItems[productObject._id].qty + 1) : 1;
        cartItems[productObject._id] = {
            ...productObject,
            qty
        }

        localStorage.setItem('cart', JSON.stringify(cartItems))
        console.log('cartItms', cartItems)
        dispatch({
            type: cartConstants.ADD_TO_CART,
            payload: { cartItems }
        })
        // dispatch({
        //     type: cartConstants.ADD_TO_CART,
        //     payload: { cartItems: {
        //         [productObject._id]: productObject
        //     } }
        // })
    }
}
// export const addToCart = (productObject) => async (dispatch) => {
//     try{
//       const token = localStorage.getItem('token')
//       const cust_id = JSON.parse(localStorage.getItem('user'))._id;
//       const config = { headers: { "Content-Type": "application/json", "Authorization": `Bearer, ${token}`, "Access": `N/A, ${cust_id}`} };
//       const { data } = await axios.get(`http://localhost:4000/cart/add-to-cart`, config);
//     }
//     catch{
  
//     }
//   }

export const updateCart = () => {
    return async ( dispatch ) => {
        const cartItems = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : null

        if(cartItems){
            dispatch({
                type: cartConstants.ADD_TO_CART,
                payload: { cartItems }
            })
            console.log('Cart updated', cartItems)
        }
    }
}