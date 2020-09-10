import Page from "components/pages/sites/base";
import prisma from "lib/prisma-client";
import { NextPage } from "next";
import React from "react";
import ISite from "types/site";

interface IProps {
  sites: ISite[];
}

const SitesIndexPage: NextPage<IProps> = ({ sites }) => {
  return <Page sites={sites} />;
};

export async function getServerSideProps() {
  const sites = await prisma.site.findMany();

  return {
    props: {
      sites,
    },
  };
}

export default SitesIndexPage;
