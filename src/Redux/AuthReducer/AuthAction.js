import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS,LOGIN_REQUEST } from "./AuthActionTypes"
import axios from "axios";
export const authRequest = () => {
    console.log("action");
    return {
        type: AUTH_REQUEST
    }
}

export const authFailureAction = () => {
    console.log("failureaction");
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
export const authLoginPhone=(payload)=>(dispatch)=>{
      console.log(payload);
    return axios.post("http://localhost:8080/auth/login",payload)
    .then((res)=>{
       const mobile= res.data.data.to.substring(3)
      dispatch(loginRequest(mobile))
       console.log(mobile,res.data);
    })

}


