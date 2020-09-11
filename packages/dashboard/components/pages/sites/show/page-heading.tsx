import { Heading, Stack, Text } from "@chakra-ui/core";
import React, { FC } from "react";
import ISite from "types/site";

interface IProps {
  site: ISite;
}

const PageHeading: FC<IProps> = ({ site }) => {
  return (
    <Stack spacing={2} p={4} bg="gray.100">
      <Heading size="md">{site.name}</Heading>
      <Text fontSize="sm">{site.id}</Text>
    </Stack>
  );
};

export default PageHeading;
