import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    CLEAR_ERRORS,
    
  } from "../constants/userConstants";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  // Login
  export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `http://localhost:4000/customer/login`,
        { email, password },
        config
      )
      const token = data.token
      let userArray = [];
      userArray.push(JSON.stringify(data.customer));
      localStorage.setItem('token', token)
      localStorage.setItem('user', userArray);
      dispatch({ type: LOGIN_SUCCESS, payload: data.customer });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: 'Filed to login' });
    }
  };
  
  // Register
  export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(`/customer/register`, userData, config);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.customer });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const isUserLoggedIn = () => {
    return async dispatch => {
      const token = localStorage.getItem('token');
      if(!token){
        dispatch({type: LOGIN_FAIL, payload: 'Login failed'})
        dispatch(clearErrors());
        console.log('Unauthorized')
      }else{
        const user = JSON.parse(localStorage.getItem('user'));
        dispatch({
          type : LOGIN_SUCCESS,
          payload : token, user
        })
      }
    }
  }
  export const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    window.location.reload()
  }
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};