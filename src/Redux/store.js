import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { vehicleReducer } from "./vehicleDetails/vehicleReducer";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/AuthReducer";
const rootReducer = combineReducers({
  vehicle: vehicleReducer,
  auth: authReducer
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()),
);
