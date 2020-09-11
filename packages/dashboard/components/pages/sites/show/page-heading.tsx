import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/core";
import React, { FC } from "react";
import ISite from "types/site";

interface IProps {
  site: ISite;
  onOpen: () => void;
}

const PageHeading: FC<IProps> = ({ site, onOpen }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Stack spacing={2}>
        <Heading size="md">{site.name}</Heading>
        <Text fontSize="sm">{site.id}</Text>
      </Stack>
      <Box>
        <Button onClick={onOpen} colorScheme="blue">
          Add new site
        </Button>
      </Box>
    </Flex>
  );
};

export default PageHeading;
