import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ISite from "types/site";

interface IProps {
  sites: ISite[];
}

const AddSiteModal = dynamic(
  import(
    /* webpackChunkName: "AddSiteModal" */ "components/pages/sites/base/add-site-modal"
  )
);

const Page: FC<IProps> = ({ sites }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sitesNode = () => {
    return sites.map((site) => {
      return (
        <Link key={site.id} href="/sites/[siteId]" as={`/sites/${site.id}`}>
          <Box
            as="a"
            role="button"
            bg="white"
            p={4}
            rounded="md"
            borderWidth={1}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Stack spacing={2}>
                <Heading size="md">{site.name}</Heading>
                <Text fontSize="sm">{site.id}</Text>
              </Stack>
              <Icon as={IoIosArrowForward} />
            </Flex>
          </Box>
        </Link>
      );
    });
  };

  const AddSiteModalNode = () => {
    if (!isOpen) {
      return false;
    }

    return <AddSiteModal isOpen={isOpen} onClose={onClose} />;
  };

  return (
    <Box maxW="4xl" mx="auto" w="full" py={12} px={4}>
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
          <Stack spacing={4}>{sitesNode()}</Stack>
        </Grid>
      </Stack>
      {AddSiteModalNode()}
    </Box>
  );
};

export default Page;
