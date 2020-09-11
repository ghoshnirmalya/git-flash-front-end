import { Box, Heading, Stack, Text } from "@chakra-ui/core";
import React, { FC } from "react";
import ISite from "types/site";

interface IProps {
  site: ISite;
}

const PullRequestDetails: FC<IProps> = ({ site }) => {
  const heightOfNavbar = "73px";
  const heightOfPageHeading = "86px";
  const heightOfMargin = "1rem";

  return (
    <Box
      h={`calc(100vh - ${heightOfNavbar} - ${heightOfPageHeading} - ${heightOfMargin})`}
      overflowY="scroll"
    >
      <Stack spacing={2} p={4} borderBottomWidth={1}>
        <Heading size="sm">Pull Request 1</Heading>
        <Text fontSize="sm">Commit SHA</Text>
      </Stack>
    </Box>
  );
};

export default PullRequestDetails;
