import { cartConstants } from "../constants/cartConstants";
import {
    ADD_USER_ORDER_REQUEST ,
    ADD_USER_ORDER_SUCCESS,
    ADD_USER_ORDER_FAILURE,
    GET_USER_ORDER_REQUEST,
    GET_USER_ORDER_SUCCESS,
    GET_USER_ORDER_FAILURE,
    GET_USER_ORDERS
} from '../constants/userConstants'
import axios from "axios";


export const addOrder = (payload) => {
  return async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Bearer, ${token}` } };
        console.log('Action payload', payload)
      const res = await axios.post(`http://localhost:4000/orders/addOrder`, payload, config);
      dispatch({ type: ADD_USER_ORDER_REQUEST });
      if (res.status === 201) {
        const { order } = res.data;
        dispatch({
          type: cartConstants.RESET_CART,
        });
        dispatch({
          type: ADD_USER_ORDER_SUCCESS,
          payload: { payload },
        });
        // const {
        //   address: { address },
        // } = res.data;
        // dispatch({
        //   type: userConstants.ADD_USER_ADDRESS_SUCCESS,
        //   payload: { address },
        // });
      } else {
        const { error } = res.data;
        console.log('error', error)
        dispatch({
          type: ADD_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log('error-2',error);
    }
  };
};

export const getOrders = (token) => {
  return async (dispatch) => {
    try {
      const config = { headers: {"Content-type": "application/json", "Authorization": `Bearer, ${token}`} }
      const res = await axios.get(`http://localhost:4000/orders/getOrders`, config);
      dispatch({ type: GET_USER_ORDER_REQUEST });
      if (res.status === 200) {
        const { orders } = res.data;
        dispatch({
          type: GET_USER_ORDER_SUCCESS,
          payload: { orders },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: GET_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};