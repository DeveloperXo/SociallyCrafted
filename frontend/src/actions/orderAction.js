import { cartConstants } from "../constants/cartConstants";
import {
    ADD_USER_ORDER_REQUEST ,
    ADD_USER_ORDER_SUCCESS,
    ADD_USER_ORDER_FAILURE,
    GET_USER_ORDER_REQUEST,
    GET_USER_ORDER_SUCCESS,
    GET_USER_ORDER_FAILURE
} from '../constants/userConstants'
import axios from "axios";


export const addOrder = (payload) => {
  return async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Bearer, ${token}` } };
        console.log('Action payload', payload.items[0])
      const res = await axios.post(`http://localhost:4000/orders/addOrder`, payload, config);
      dispatch({ type: ADD_USER_ORDER_REQUEST });
      if (res.status === 201) {
        const { order } = res.data;
        dispatch({
          type: cartConstants.RESET_CART,
        });
        dispatch({
          type: ADD_USER_ORDER_SUCCESS,
          payload: { order },
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

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/getOrders`);
      dispatch({ type: GET_USER_ORDER_REQUEST });
      if (res.status === 200) {
        console.log(res);
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
