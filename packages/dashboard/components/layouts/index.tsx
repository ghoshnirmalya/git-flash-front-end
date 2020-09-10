import { Box } from "@chakra-ui/core";
import Footer from "components/footer";
import Navbar from "components/navbar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  const heightOfNavbar = "73px";
  const heightOfFooter = "56px";

  return (
    <Box minH="100vh">
      <Navbar />
      <Box px={4} h={`calc(100vh - ${heightOfNavbar} - ${heightOfFooter})`}>
        <Box maxW="4xl" mx="auto" w="full">
          <Box py={12}>{children}</Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
