import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";

const Navbar = () => {
  return (
    <AppBar style={{ background: "#616161" }}>
      <Box
        display="flex"
        p={1.5}
        px={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box fontSize={20} fontWeight="bolder">
          Riversys
        </Box>
        <Box ml={50} display="flex">
          <Box px={2}>Purchase order</Box>
          <Box px={2}>Dashboard</Box>
          <Box px={2}>Reports</Box>
          <Box px={2}>RFQ</Box>
          <Box px={2}>Invoice</Box>
        </Box>
        <Box>
          <div>User-name</div>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Navbar