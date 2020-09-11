import { Box, Grid, Heading, Icon, Stack, Text, Flex } from "@chakra-ui/core";
import React, { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ISite from "types/site";

interface IProps {
  site: ISite;
}

const Page: FC<IProps> = ({ site }) => {
  const heightOfNavbar = "73px";
  const heightOfPageHeading = "86px";
  const heightOfMargin = "1rem";

  const pullRequestsListNode = () => {
    return (
      <Stack
        spacing={0}
        h={`calc(100vh - ${heightOfNavbar} - ${heightOfPageHeading} - ${heightOfMargin})`}
        overflowY="scroll"
        borderRightWidth={1}
      >
        {[...Array(10)].map((_array, index) => {
          return (
            <Box
              key={index}
              p={4}
              borderBottomWidth={1}
              role="button"
              _hover={{
                bg: "gray.100",
              }}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text>Build {index}</Text>
                <Icon as={IoIosArrowForward} />
              </Flex>
            </Box>
          );
        })}
      </Stack>
    );
  };

  const pullRequestDetailsNode = () => {
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

  const pageHeadingNode = () => {
    return (
      <Stack spacing={2} p={4} bg="gray.100">
        <Heading size="md">{site.name}</Heading>
        <Text fontSize="sm">{site.id}</Text>
      </Stack>
    );
  };

  return (
    <>
      {pageHeadingNode()}
      <Box m={4} mt={0} borderWidth={1} rounded="md" bg="white">
        <Grid
          templateColumns={["1fr 2fr", "1fr 2fr", "1fr 3fr", "1fr 4fr"]}
          gap={0}
        >
          {pullRequestsListNode()}
          {pullRequestDetailsNode()}
        </Grid>
      </Box>
    </>
  );
};

export default Page;
