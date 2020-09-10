import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma-client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const site = await prisma.site.findOne({
      where: {
        id: "e2b48536-6d44-41a7-bd26-7a0d40f03924",
      },
      include: {
        pages: true,
      },
    });

    res.status(200).json(site?.pages);
  }
};
