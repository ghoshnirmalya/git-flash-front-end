import { Box, Heading, Stack } from "@chakra-ui/core";
import React, { FC } from "react";
import { Navbar } from "components/navbar";

const Layout: FC = ({ children }) => {
  return (
    <Box minH="100vh">
      <Navbar />
      <Box maxW="4xl" mx="auto" w="full">
        <Box py={8}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
