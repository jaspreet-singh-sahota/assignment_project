import React, { useMemo } from "react";
import { dataKeys } from "../../utils/data";
import { TableBody, TableCell, TableRow } from "@material-ui/core";
import MomentContainer from "../moment/MomentContainer";
import CheckboxComponent from "../checkbox/CheckboxComponent";
import { useStyles } from "./styles/tableBodyStyle";
import { useSelector } from "react-redux";

const TableBodyComponent = () => {
  const classes = useStyles();
  const vendorInfoData = useSelector((state) => state.vendorInfo.vendorInfo);
  const filterByKeys = useSelector(
    (state) => state.filteredData.filterKeyPairs
  );
  const checkboxObj = useSelector((state) => state.checkedStatus.checkedStatus);

  const filteredVendorData = useMemo(
    () =>
      vendorInfoData.filter((obj) => {
        return Object.entries(filterByKeys).every((arr) => {
          if (arr[1] === "" || arr[1] === "All" || arr[1] === undefined) {
            return obj;
          } else if (typeof obj[arr[0]] === "string") {
            return obj[arr[0]].toLowerCase() === arr[1].toLowerCase();
          } else if (
            typeof obj[arr[0]] === "object" &&
            arr[0] === ["DueDate"] &&
            obj["DueDate"] > arr[1]
          ) {
            return obj;
          } else if (
            typeof obj[arr[0]] === "object" &&
            arr[0] === ["CommentedDate"] &&
            obj["CommentedDate"] < arr[1]
          ) {
            return obj;
          } else {
            return obj[arr[0]] >= arr[1];
          }
        });
      }),
    [filterByKeys, vendorInfoData]
  );

  return (
    <TableBody>
      {filteredVendorData &&
        filteredVendorData.map((obj) => (
          <TableRow key={obj["id"]} className={classes.tableRow}>
            <CheckboxComponent
              status={
                checkboxObj["checkbox"] === "All" ||
                checkboxObj["checkbox"] === obj["Status"]
              }
            />
            {dataKeys.map((key) => (
              <TableCell
                className={classes.tableCell}
                style={{
                  textAlign:
                    key === "Vendor" || key === "Description"
                      ? "left"
                      : "center",
                }}
                key={key}
              >
                {key === "DueDate" || key === "CommentedDate" ? (
                  <MomentContainer date={obj[key]} />
                ) : (
                  obj[key]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
    </TableBody>
  );
};

export default TableBodyComponent;
