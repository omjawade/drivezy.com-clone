import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_REQUEST } from "./AuthActionTypes"


const initState = {
  authLoading: false,
  authFailure: false,
  user: null,
  token: null,
  loginRes:null
};
console.log("reducer");
export const authReducer = (state = initState, action) => {
  console.log("reducer", action)
  switch (action.type) {

    case AUTH_REQUEST: {
      console.log("reducer auth", action)
      return {
        ...state,
        authLoading: true
      }
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        authLoading: false,
        user: action.payload
      };
    }
    case AUTH_FAILURE: {
      return {
        ...state,
        authLoading: false,
        authFailure: true
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        authLoading: false,
        loginRes:action.payload
      };
    }


    default:
      return state;
  }
};
