import { Box, Heading, Stack, Text } from "@chakra-ui/core";
import React, { FC } from "react";
import ISite from "types/site";

interface IProps {
  site: ISite;
}

const PullRequestsList: FC<IProps> = ({ site }) => {
  const heightOfNavbar = "73px";
  const heightOfPageHeading = "86px";
  const heightOfMargin = "1rem";

  return (
    <Stack
      spacing={0}
      h={`calc(100vh - ${heightOfNavbar} - ${heightOfPageHeading} - ${heightOfMargin})`}
      overflowY="scroll"
      borderRightWidth={1}
    >
      <Box
        p={4}
        borderBottomWidth={1}
        role="button"
        _hover={{
          bg: "gray.100",
        }}
      >
        <Stack spacing={2} w="full">
          <Heading size="sm" isTruncated>
            Add benchmarking for performance optimization
          </Heading>
          <Text fontSize="sm" isTruncated>
            #34567: Opened 8 days ago by ghoshnirmalya
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};

export default PullRequestsList;
