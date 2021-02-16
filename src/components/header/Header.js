import React from "react";
import Box from "@material-ui/core/Box";

const Header = () => {
  return (
    <Box
      display="flex"
      p={1.5}
      pt={7.5}
      px={3}
      justifyContent="space-between"
      alignItems="center"
      borderBottom='0.5px solid grey'
    >
      <Box fontSize={20} fontWeight='bold'>Purchase orders</Box>
      <Box fontSize={13} display='flex'>
        <Box>LAST ERP sync: Fri, May 18, 2020 | 10.20.20 AM IST |</Box>
        <Box pl={3}>Some Logo</Box>
      </Box>
    </Box>
  );
};

export default Header;
