import { Box, Grid } from "@chakra-ui/core";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import ISite from "types/site";

interface IProps {
  site: ISite;
}

const PageHeading = dynamic(
  import(
    /* webpackChunkName: "PageHeading" */ "components/pages/sites/show/page-heading"
  )
);

const PullRequestDetails = dynamic(
  import(
    /* webpackChunkName: "PullRequestDetails" */ "components/pages/sites/show/pull-request-details"
  )
);

const PullRequestsListNode = dynamic(
  import(
    /* webpackChunkName: "PullRequestsListNode" */ "components/pages/sites/show/pull-requests-list"
  )
);

const Page: FC<IProps> = ({ site }) => {
  return (
    <>
      <PageHeading site={site} />
      <Box m={4} mt={0} borderWidth={1} rounded="md" bg="white">
        <Grid
          templateColumns={["1fr 2fr", "1fr 2fr", "1fr 3fr", "1fr 3fr"]}
          gap={0}
        >
          <PullRequestsListNode site={site} />
          <PullRequestDetails site={site} />
        </Grid>
      </Box>
    </>
  );
};

export default Page;
