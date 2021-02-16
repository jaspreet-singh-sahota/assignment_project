import {
  FETCH_VENDOR_INFO_REQUEST,
  FETCH_VENDOR_INFO_SUCCESS,
  FETCH_VENDOR_INFO_FAILURE,
} from "./actionType";

export const fetchVendorInfoRequest = () => ({
  type: FETCH_VENDOR_INFO_REQUEST,
});

export const fetchVendorInfoSuccess = (venderInfo) => ({
  type: FETCH_VENDOR_INFO_SUCCESS,
  payload: venderInfo,
});

export const fetchVendorInfoFailure = (error) => ({
  type: FETCH_VENDOR_INFO_FAILURE,
  payload: error,
});
