import { Grid, Heading, Stack } from "@chakra-ui/core";
import React, { FC } from "react";
import ISite from "types/site";

interface IProps {
  site: ISite;
}

const Page: FC<IProps> = ({ site }) => {
  console.log(site);

  return (
    <Stack spacing={8}>
      <Heading>Site Details</Heading>
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        Hello
      </Grid>
    </Stack>
  );
};

export default Page;
