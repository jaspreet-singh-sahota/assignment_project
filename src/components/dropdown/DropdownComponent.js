import React, { useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "./styles/dropdownStyles";
import { useDispatch } from "react-redux";
import { filterVendorInfo } from "../../redux/action/FilterVenderInfoAction";
import { checkboxValueByStatus } from "../../redux/action/checkboxByStatusAction";

export default function DropdownComponent({
  label,
  placeholder,
  itemsArray,
  styles,
}) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let obj = {};
    obj[label] = selectedValue;
    label === "checkbox"
      ? dispatch(checkboxValueByStatus(obj))
      : dispatch(filterVendorInfo(obj));
  }, [dispatch, label, selectedValue]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl style={styles} className={classes.formControl}>
      <Select
        className={classes.select}
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>
        {itemsArray.map((value) => (
          <MenuItem className={classes.menuItems} key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
