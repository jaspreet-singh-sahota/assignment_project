import React from "react";
import ReactExport from "react-export-excel";
import { useSelector } from "react-redux";
import { dataKeys } from "../../utils/data";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportAsExcel = () => {
  const dataSet1 = useSelector((state) => state.vendorInfo.vendorInfo);

  return (
    <ExcelFile
      element={
        <button style={{ fontSize: "0.7rem" }}>Download as Excel</button>
      }
    >
      <ExcelSheet data={dataSet1} name="Employees">
        {dataKeys.map((title) => (
          <ExcelColumn key={title} label={title} widthPx="300px" value={title} />
        ))}
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportAsExcel;
