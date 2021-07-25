import { bindActionCreators } from "redux";
import {
  GET_BOOKED,
  GET_CAR_FAILURE,
  GET_CAR_REQUEST,
  GET_CAR_SUCCESS,
} from "./actionType";

const initState = {
  data: [],
  isLoading: true,
  isError: false,
  booked:[]
};

export const carsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CAR_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_CAR_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case GET_CAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case GET_BOOKED:{
        return{
          ...state,
          booked: payload
        }
      }
    default:
      return state;
  }
};
