import prisma from "lib/prisma-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id } = req.query;

    const site = await prisma.site.findOne({
      where: {
        id: id as string,
      },
      include: {
        pages: true,
      },
    });

    res.status(200).json(site);
  }
};
