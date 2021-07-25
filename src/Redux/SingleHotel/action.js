import axios from "axios";
import {
  GET_CAR_FAILURE,
  GET_CAR_REQUEST,
  GET_CAR_SUCCESS,
} from "./actionType";

export const getcarReq = () => {
  return {
    type: GET_CAR_REQUEST,
  };
};
export const getcarSuc = (payload) => {
  return {
    type: GET_CAR_SUCCESS,
    payload,
  };
};
export const getcarFail = (err) => {
  return {
    type: GET_CAR_FAILURE,
    payload: err,
  };
};

export const getCar = (vehicle,id) => (dispatch, getState) => {
  const reqAction = getcarReq();
  dispatch(reqAction);

  return axios
    .get(`http://localhost:8080/${vehicle}/${id}`)
    .then((res) => {
      const sucAction = getcarSuc(res.data.data);
      dispatch(sucAction);
      console.log(res.data,"anil")
      return { success: true };
    })
    .catch((err) => {
      const errAction = getcarFail(err);
      dispatch(errAction);
    });
};
