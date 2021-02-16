import { FILTER_VENDOR_INFO } from "./actionType";

export const filterVendorInfo = (filterByItem) => ({
  type: FILTER_VENDOR_INFO,
  payload: filterByItem,
});
