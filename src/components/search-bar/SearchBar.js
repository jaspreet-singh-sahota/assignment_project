/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useStyles } from "./styles/searchBarStyle";
import { useSelector, useDispatch } from "react-redux";
import { filterVendorInfo } from "../../redux/action/FilterVenderInfoAction";

export default function SearchBar() {
  const classes = useStyles();
  const vendorInfoData = useSelector((state) => state.vendorInfo.vendorInfo);
  const [selectedVendorName, setSelectedVendorName] = useState("");
  const dispatch = useDispatch()

  const defaultProps = {
    options: vendorInfoData,
    getOptionLabel: (option) => option.Vendor,
  };

  useEffect(() => {
   dispatch(filterVendorInfo({'Vendor': selectedVendorName}))
  }, [dispatch, selectedVendorName]);

  const handleOnChange = (e) => setSelectedVendorName(e.target.innerText);

  return (
    <Autocomplete
      {...defaultProps}
      className={classes.searchBar}
      autoComplete
      onInputChange={handleOnChange}
      includeInputInList
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Vendor"
          width="200px"
          size="small"
        />
      )}
    />
  );
}
