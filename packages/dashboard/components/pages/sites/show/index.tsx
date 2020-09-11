import { Box, Grid, useDisclosure } from "@chakra-ui/core";
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

const PullRequestsList = dynamic(
  import(
    /* webpackChunkName: "PullRequestsList" */ "components/pages/sites/show/pull-requests-list"
  )
);

const AddPageModal = dynamic(
  import(
    /* webpackChunkName: "AddPageModal" */ "components/pages/sites/show/add-page-modal"
  )
);

const Page: FC<IProps> = ({ site }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addPageModalNode = () => {
    if (!isOpen) {
      return false;
    }

    return <AddPageModal isOpen={isOpen} onClose={onClose} site={site} />;
  };

  return (
    <>
      <PageHeading site={site} onOpen={onOpen} />
      <Box m={4} mt={0} borderWidth={1} rounded="md" bg="white">
        <Grid
          templateColumns={["1fr 2fr", "1fr 2fr", "1fr 3fr", "1fr 3fr"]}
          gap={0}
        >
          <PullRequestsList site={site} />
          <PullRequestDetails site={site} />
        </Grid>
      </Box>
      {addPageModalNode()}
    </>
  );
};

export default Page;
