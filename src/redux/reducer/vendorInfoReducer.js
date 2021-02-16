import {
  FETCH_VENDOR_INFO_REQUEST,
  FETCH_VENDOR_INFO_SUCCESS,
  FETCH_VENDOR_INFO_FAILURE,
} from "../action/actionType";

const INITIAL_STATE = {
  loading: false,
  vendorInfo: [],
  error: "",
};

const vendorInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_VENDOR_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VENDOR_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        vendorInfo: [...action.payload],
        error: "",
      };
    case FETCH_VENDOR_INFO_FAILURE:
      return {
        loading: false,
        vendorInfo: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default vendorInfoReducer;
