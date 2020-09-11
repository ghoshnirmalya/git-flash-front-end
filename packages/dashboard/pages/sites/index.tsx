import Page from "components/pages/sites/base";
import fetcher from "lib/fetcher";
import prisma from "lib/prisma-client";
import { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import ISite from "types/site";

interface IProps {
  sites: ISite[];
}

const SitesIndexPage: NextPage<IProps> = ({ sites }) => {
  return <Page sites={sites} />;
};

export async function getServerSideProps() {
  const sites = await fetcher("api/sites");

  return {
    props: {
      sites,
    },
  };
}

export default SitesIndexPage;
