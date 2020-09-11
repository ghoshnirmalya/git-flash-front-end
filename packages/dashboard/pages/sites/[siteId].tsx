import Page from "components/pages/sites/show";
import prisma from "lib/prisma-client";
import { NextPage, NextPageContext } from "next";
import React from "react";
import ISite from "types/site";

interface IProps {
  site: ISite;
}

const SitesShowPage: NextPage<IProps> = ({ site }) => {
  return <Page site={site} />;
};

export async function getServerSideProps(ctx: NextPageContext) {
  const siteId = ctx.query.siteId as string;
  const site = await prisma.site.findOne({
    where: {
      id: siteId,
    },
    include: {
      pages: true,
    },
  });

  return {
    props: {
      site,
    },
  };
}

export default SitesShowPage;
