import React from "react";
import { tableTitle } from "../../utils/data";
import { TableHead, TableCell } from "@material-ui/core";
import DropdownComponent from "../dropdown/DropdownComponent";
import { useStyles } from "./styles/tableHeadStyle";
import { status } from "../../utils/data";

const TableHeadComponent = () => {
  const classes = useStyles();

  return (
    <TableHead className={classes.tableHead}>
      <DropdownComponent
        styles={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
        itemsArray={status}
        label={"checkbox"}
        placeholder={"Check: All"}
      />
      {tableTitle.map((value) => (
        <TableCell
          key={value}
          className={classes.tableCell}
          style={{
            width:
              value === "Description"
                ? "170px"
                : "" || value === "Vendor"
                ? "120px"
                : "",
            textAlign:
              value === "Vendor" || value === "Description" ? "left" : "center",
          }}
        >
          {value}
        </TableCell>
      ))}
    </TableHead>
  );
};

export default TableHeadComponent;
