import prisma from "lib/prisma-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { url, siteId } = req.body;

    const site = await prisma.page.create({
      data: {
        url,
        site: {
          connect: {
            id: siteId,
          },
        },
      },
    });

    res.status(200).json(site);
  }
};
