import axios from 'axios';
import { sellerConstants } from '../constants/sellerConstants';

export const sellerLogin = (email, password) => async (dispatch) => {
    try{
        dispatch({type: sellerConstants.SELLER_LOGIN_REQUEST})
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post('http://localhost:4000/seller/login', {email, password}, config)

        const token = data.token;
        localStorage.setItem('seller', JSON.stringify(data.seller));
        localStorage.setItem('sellerToken', token);
        dispatch({type: sellerConstants.SELLER_LOGIN_SUCCESS, payload: data.seller}); // something here
    }
    catch(error){
      dispatch({ type: sellerConstants.SELLER_LOGIN_FAILURE, payload: 'Filed to login' });
    }
}

export const sellerRegister = (sellerData) => async (dispatch) => {
    try{
        dispatch({type: sellerConstants.SELLER_REGISTER_REQUEST});
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post('http://localhost:4000/seller/register', sellerData, config)

        const token = data.token;
        localStorage.setItem('sellerToken', token);
        localStorage.setItem('seller', JSON.stringify(data.seller));
        dispatch({type: sellerConstants.SELLER_REGISTER_SUCCESS, payload: data.seller}); // something here
    }
    catch(error){
        dispatch({type: sellerConstants.SELLER_REGISTER_FAILURE})
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: sellerConstants.CLEAR_ERRORS });
  };


export const isSellerCheck = (dispatch) => {
    const sellerToken = localStorage.getItem('sellerToken');
    const seller = JSON.parse(localStorage.getItem('seller'))
    if(sellerToken && seller){
        dispatch({type: sellerConstants.SELLER_LOGIN_SUCCESS, payload: seller})
    }
    else{
        dispatch({ type: sellerConstants.SELLER_LOGIN_FAILURE, payload: 'Filed to login' });
    }
}

export const fetchSeller = (id) => async (dispatch) => {
    try{
        dispatch({type: sellerConstants.GET_SELLER_DETAILS_REQUEST})
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.get(`http://localhost:4000/seller/sellerDetails/${id}`, config)
        dispatch({type: sellerConstants.GET_SELLER_DETAILS_SUCCESS, payload: {seller: data.seller, sellerProducts: data.sellerProducts}})
    }catch(error){
        dispatch({type: sellerConstants.GET_SELLER_DETAILS_FAILURE})
    }
}

export const addFollower = (byFollowId, toFollowId) => async (dispatch) => {
    try{
        const query = {byFollowId, toFollowId}
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`http://localhost:4000/seller/addFollower`, query, config);
    }catch(error){
        console.log(error)
    }

}

export const getFollowingProducts = (id) => async (dispatch) => {
    try{
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.get(`http://localhost:4000/seller/sellerDetails/${id._id}`, config)
        dispatch({type: sellerConstants.GET_FOLLOWING_PRODUCTS, payload: data.sellerProducts})
    }catch(error){
        console.log(error)
    }
}