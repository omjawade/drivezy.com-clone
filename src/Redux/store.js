import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { vehicleReducer } from "./vehicleDetails/vehicleReducer";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/AuthReducer";
import { carsReducer } from "./SingleHotel/reducer";
const rootReducer = combineReducers({
  vehicle: vehicleReducer,
  singleCars: carsReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);
