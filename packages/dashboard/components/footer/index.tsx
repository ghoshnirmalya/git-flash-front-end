import { Box, Flex, Text } from "@chakra-ui/core";
import { NextComponentType } from "next";
import React from "react";

const Footer: NextComponentType = () => {
  return (
    <Box p={4}>
      <Box maxW="4xl" mx="auto" w="full">
        <Flex justifyContent="center">
          <Text fontWeight="bold">GitFlash</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
