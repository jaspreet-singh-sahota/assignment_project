import { combineReducers } from "redux";
import vendorInfoReducer from "./reducer/vendorInfoReducer";
import filterVendorInfoReducer from "./reducer/filterVendorInfoReduce";
import checkedStatusReducer from "./reducer/checkedStatusReducer";

const rootReducer = combineReducers({
  vendorInfo: vendorInfoReducer,
  filteredData: filterVendorInfoReducer,
  checkedStatus: checkedStatusReducer,
});

export default rootReducer;
