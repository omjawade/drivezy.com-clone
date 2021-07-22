import {AUTH_FAILURE,AUTH_REQUEST,AUTH_SUCCESS} from "./AuthActionTypes"

export const authRequest=()=>{
    console.log("action");
    return{
        type:AUTH_REQUEST
    }
}

export const authFailureAction=()=>{
    console.log("failureaction");
    return{
        type:AUTH_FAILURE
    }
}


