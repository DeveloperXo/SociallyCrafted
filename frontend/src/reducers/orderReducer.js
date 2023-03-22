import {
    ADD_USER_ORDER_REQUEST ,
    ADD_USER_ORDER_SUCCESS,
    ADD_USER_ORDER_FAILURE,
    GET_USER_ORDER_REQUEST,
    GET_USER_ORDER_SUCCESS,
    GET_USER_ORDER_FAILURE,
    ADD_USER_ADDRESS,
    GET_USER_ORDER_DETAILS_SUCCESS,
    GET_USER_ORDER_DETAILS_REQUEST,
    GET_USER_ORDER_DETAILS_FAILURE
} from '../constants/userConstants'

const initState = {
//   address: [],
  orders: [],
  orderDetails: {},
  error: null,
  loading: false,
  orderFetching: false,
  placedOrderId: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_USER_ORDER_REQUEST:
      state = {
        ...state,
        orderFetching: true,
      };
      break;
    case GET_USER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
        orderFetching: false,
      };
      break;
    case GET_USER_ORDER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        orderFetching: false,
      };
      break;
    case GET_USER_ORDER_DETAILS_REQUEST:
      break;
    case GET_USER_ORDER_DETAILS_SUCCESS:
      state = {
        ...state,
        orderDetails: action.payload.order,
      };
      break;
    case GET_USER_ORDER_DETAILS_FAILURE:
      break;
    case ADD_USER_ORDER_SUCCESS:
      state = {
        ...state,
        placedOrderId: action.payload.order._id,
      };
      break;
    case ADD_USER_ADDRESS:
        state = {
            ...state,
            address: action.payload
        }
        break;
  }
  return state;
};