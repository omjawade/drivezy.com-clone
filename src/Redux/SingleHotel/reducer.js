import {
  GET_CAR_FAILURE,
  GET_CAR_REQUEST,
  GET_CAR_SUCCESS,
} from "./actionType";

const initState = {
  data: [],
  isLoading: true,
  isError: false,
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
    default:
      return state;
  }
};
