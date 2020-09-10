import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Link as _Link,
  Stack,
  Text,
  useDisclosure,
  Divider,
} from "@chakra-ui/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC } from "react";
import ISite from "types/site";

interface IProps {
  sites: ISite[];
}

const CreateSiteModal = dynamic(
  import(
    /* webpackChunkName: "CreateSiteModal" */ "components/pages/sites/base/create-site-modal"
  )
);

const Page: FC<IProps> = ({ sites }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sitesNode = () => {
    return sites.map((site) => {
      return (
        <>
          <Link key={site.id} href="/sites/[siteId]" as={`/sites/${site.id}`}>
            <_Link>
              <Stack spacing={8} isInline>
                <Stack spacing={2}>
                  <Heading size="md">{site.name}</Heading>
                  <Text fontSize="sm">{site.id}</Text>
                </Stack>
              </Stack>
            </_Link>
          </Link>
          <Divider />
        </>
      );
    });
  };

  const createSiteModalNode = () => {
    if (!isOpen) {
      return false;
    }

    return <CreateSiteModal isOpen={isOpen} onClose={onClose} />;
  };

  return (
    <>
      <Stack spacing={12}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="2xl">All Sites</Heading>
          <Box>
            <Button onClick={onOpen} colorScheme="blue">
              Add new site
            </Button>
          </Box>
        </Flex>
        <Grid templateColumns="repeat(1, 1fr)" gap={4}>
          <Stack spacing={8}>{sitesNode()}</Stack>
        </Grid>
      </Stack>
      {createSiteModalNode()}
    </>
  );
};

export default Page;
