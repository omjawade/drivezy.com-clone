import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS,LOGIN_REQUEST, SAVE_NAME } from "./AuthActionTypes"
import axios from "axios";
export const authRequest = () => {
  
    return {
        type: AUTH_REQUEST
    }
}

export const authSuccess = (payload) => {
   
    return {
        type: AUTH_SUCCESS,
        payload
    }
}
export const authFailureAction = () => {
   
    return {
        type: AUTH_FAILURE
    }
}

export const loginRequest=(payload)=>{
    return {
        type:LOGIN_REQUEST,
        payload
    }
}
export const savename=(payload)=>{
    return {
        type:SAVE_NAME,
        payload
    }
}
export const authLoginPhone=(payload)=>(dispatch)=>{
      console.log(payload);
    return axios.post("http://localhost:8080/auth/login",payload)
    .then((res)=>{
       const mobile= res.data.data.to.substring(3)
      dispatch(loginRequest(mobile))
       console.log(mobile,res.data);
    })

}
export const authVerifyPhone=(payload)=>(dispatch)=>{
    console.log(payload);
  return axios.post("http://localhost:8080/auth/verify",payload)
  .then((res)=>{
       const data= res.data.data
       dispatch(authSuccess(data))
       console.log(data);
  })

}
export const authgooglelogin=(payload)=>(dispatch)=>{
    console.log(payload);
  return axios.get("http://localhost:8080/auth/google")
  .then((res)=>{
       const data= res.data
      // dispatch(authSuccess(data))
       console.log(data);
  })

}


