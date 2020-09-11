import { Box } from "@chakra-ui/core";
import Navbar from "components/navbar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  const heightOfNavbar = "73px";

  return (
    <Box minH="100vh">
      <Navbar />
      <Box minH={`calc(100vh - ${heightOfNavbar})`} bg="gray.100">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
