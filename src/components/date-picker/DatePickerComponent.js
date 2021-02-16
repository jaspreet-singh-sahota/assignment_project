import "date-fns";
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import styles from './styles/datePicker.module.css'
import { useDispatch } from "react-redux";
import { filterVendorInfo } from "../../redux/action/FilterVenderInfoAction";

export default function MaterialUIPickers({label}) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-02-18T21:11:54")
  );

  const dispatch = useDispatch()

  useEffect(() => {
    const obj = {}
    obj[label] = selectedDate;
    dispatch(filterVendorInfo(obj));
  }, [dispatch, label, selectedDate])

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          className={styles['date-picker']}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
