import { FILTER_VENDOR_INFO } from "../action/actionType";

const INITIAL_STATE = {
  filterKeyPairs: {},
};

const filterVendorInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_VENDOR_INFO:
      return {
        ...state,
        filterKeyPairs: { ...state["filterKeyPairs"], ...action.payload },
      }
    default:
      return state;
  }
};

export default filterVendorInfoReducer;
