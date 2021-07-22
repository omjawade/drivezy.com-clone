import {
  //   ADD_VEHICLE_DETAILS_FAILURE,
  //   ADD_VEHICLE_DETAILS_REQUEST,
  //   ADD_VEHICLE_DETAILS_SUCCESS,
  GET_VEHICLE_DETAILS_FAILURE,
  GET_VEHICLE_DETAILS_REQUEST,
  GET_VEHICLE_DETAILS_SUCCESS,
} from "./vehicleActionTypes";

import axios from "axios";

export const getVehicleDetailsRequest = () => {
  return {
    type: GET_VEHICLE_DETAILS_REQUEST,
  };
};

export const getVehicleDetailsSuccess = (payload) => {
  return {
    type: GET_VEHICLE_DETAILS_SUCCESS,
    payload,
  };
};

export const getVehicleDetailsFailure = (error) => {
  return {
    type: GET_VEHICLE_DETAILS_FAILURE,
    payload: error,
  };
};

export const getVehicleData = (query) => (dispatch) => {
  const requestAction = getVehicleDetailsRequest();
  dispatch(requestAction);
  return axios
    .get(`http://localhost:8080/${query}`)
    .then((response) => {
      const successAction = getVehicleDetailsSuccess(response.data);
      dispatch(successAction);
    })
    .catch((error) => {
      const errorAction = getVehicleDetailsFailure(error);
      dispatch(errorAction);
    });
};
