import React from "react";
import { Box } from "@material-ui/core";
import { statusCount } from "../../utils/data";
import CustomButton from "../button/CustomButton";
// import SearchBar from "../search-bar/SearchBar";
import ComboBox from "../search-bar/SearchBar";
import ExportAsExcel from "../export-as-excel/ExportAsExcel";

const FilterRow = () => {
  return (
    <Box position="relative">
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" justifyContent="space-between">
          {Object.entries(statusCount).map((value) => (
            <Box key={value[0]} m={2}>
              <CustomButton text={`${value[1]} ${value[0]}`} />
            </Box>
          ))}
          <Box position="absolute" top="0" left="65%">
            <ComboBox />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" px={5}>
          <ExportAsExcel/>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterRow;
