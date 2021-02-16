import { STATUS_CHECKED } from "../action/actionType";

const INITIAL_STATE = {
  checkedStatus: {},
};

const checkedStatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return {
        ...state,
        checkedStatus: { ...state["checkedStatus"], ...action.payload },
      };
    default:
      return state;
  }
};

export default checkedStatusReducer;
