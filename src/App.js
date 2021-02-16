import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import DataTable from "./components/table/Table";
import FilterRow from "./components/filter-row/FilterRow";
import FilterRowSecond from "./components/filter-row-2/FilterRowSecond";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchVendorInfoSuccess } from "./redux/action/vendorInfoAction";
import { data } from "./utils/data";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVendorInfoSuccess(data));
  }, [dispatch]);
  
  return (
    <>
      <Navbar />
      <Header />
      <FilterRow/>
      <FilterRowSecond/>
      <DataTable />
    </>
  );
}

export default App;
