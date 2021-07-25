import axios from "axios";
import {
  GET_BOOKED,
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

export const getBooked=(payload)=>{
  return{
    type:GET_BOOKED,
    payload
  }
}

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

export const getbookedDetails=(userid)=>(dispatch)=>{

  return axios.get(`http://localhost:8080/booking/${userid}`)
  .then((res)=>{
    console.log(res.data.data,"booked");
     dispatch(getBooked(res.data.data))
  })
}

export const postBooked=(payload)=>(dispatch)=>{

  return axios.post(`http://localhost:8080/booking`,payload)
  .then((res)=>{
    console.log(res.data.data,"booked");
     dispatch(getBooked(res.data.data))
  })
}

export const cancelBokking=(payload,id,userid)=>(dispatch)=>{

  return axios.patch(`http://localhost:8080/booking/${id}/${userid}`,payload)
  .then((res)=>{
    console.log(res.data.data,"canceleed");
     dispatch(getBooked(res.data.data))
  })
}