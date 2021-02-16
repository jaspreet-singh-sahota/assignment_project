import React from "react";
import { Box } from "@material-ui/core";
import DropdownComponent from "../dropdown/DropdownComponent";
import MaterialUIPickers from "../date-picker/DatePickerComponent";
import { status } from "../../utils/data";
import { useSelector } from "react-redux";

const FilterRowSecond = () => {
  const vendorInfo = useSelector((state) => state.vendorInfo.vendorInfo);
  const qtyOrdered = vendorInfo.map((obj) => obj["QtyOrdered"]);
  const supplier = vendorInfo.map((obj) => obj["Vendor"]);

  return (
    <Box px={2}>
      <Box
        display="flex"
        borderRadius="25px"
        border="1px solid rgba(204, 202, 204, 1)"
        width="70%"
        alignItems="center"
      >
        <Box>
          <DropdownComponent
            label={"Status"}
            itemsArray={status}
            placeholder={"Status: All"}
          />
        </Box>
        <Box px={5}>
          <DropdownComponent
            label={"QtyOrdered"}
            itemsArray={qtyOrdered}
            placeholder={"Qty Ordered: All"}
          />
        </Box>
        <Box px={5}>
          <DropdownComponent
            label={"Vendor"}
            itemsArray={supplier}
            placeholder={"Suppliers: All"}
          />
        </Box>
        <MaterialUIPickers label={"DueDate"} />
        <MaterialUIPickers label={"CommentedDate"} />
      </Box>
    </Box>
  );
};

export default FilterRowSecond;
