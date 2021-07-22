import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { vehicleReducer } from "./vehicleDetails/vehicleReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  vehicle: vehicleReducer,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()),
);
