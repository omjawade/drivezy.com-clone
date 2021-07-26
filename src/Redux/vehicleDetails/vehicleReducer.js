import {
  ADD_FILTER_DETAILS,
  ADD_DATE_DETAILS,
  ADD_VEHICLE_DETAILS,
  ADD_VEHICLE_TYPE,
  GET_VEHICLE_DETAILS_FAILURE,
  GET_VEHICLE_DETAILS_REQUEST,
  GET_VEHICLE_DETAILS_SUCCESS,
} from "./vehicleActionTypes";

const initState = {
  vehicle: {
    data: [],
    isLoading: false,
    isError: false,
  },
  filters: {
    data: [],
  },
  dates: {
    data: [],
  },
  vehicleType: {
    data: [],
  },
  vehicleDetails: {
    data: "",
  },
};

export const vehicleReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_VEHICLE_DETAILS_REQUEST: {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          isLoading: true,
          isError: false,
        },
      };
    }
    case GET_VEHICLE_DETAILS_SUCCESS: {
      return {
        ...state,
        vehicle: {
          data: action.payload,
          isLoading: false,
        },
      };
    }
    case GET_VEHICLE_DETAILS_FAILURE: {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          isLoading: false,
          isError: true,
        },
      };
    }
    case ADD_FILTER_DETAILS: {
      return {
        ...state,
        filters: {
          data: action.payload,
        },
      };
    }
    case ADD_DATE_DETAILS: {
      return {
        ...state,
        dates: {
          data: action.payload,
        },
      };
    }
    case ADD_VEHICLE_TYPE: {
      return {
        ...state,
        vehicleType: {
          data: action.payload,
        },
      };
    }
    case ADD_VEHICLE_DETAILS: {
      return {
        ...state,
        vehicleDetails: {
          data: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
