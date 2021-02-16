import * as React from "react";
import { Table, TableContainer } from "@material-ui/core";
import TableHeadComponent from "../table-head/TableHead";
import TableBodyComponent from "../table-body/TableBodyComponent";
import styles  from './styles/table.module.css'

const TableComponent = () => {
  return (
    <TableContainer className={styles['table-container']}>
      <Table>
        <TableHeadComponent />
        <TableBodyComponent/>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
