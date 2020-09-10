import prisma from "lib/prisma-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name } = req.body;

    const site = await prisma.site.create({
      data: { name },
    });

    res.status(200).json(site);
  }
};
