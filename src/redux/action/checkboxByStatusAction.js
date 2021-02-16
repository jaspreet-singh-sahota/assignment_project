import { STATUS_CHECKED } from "./actionType";

export const checkboxValueByStatus = (checkedValue) => ({
  type: STATUS_CHECKED,
  payload: checkedValue,
});
