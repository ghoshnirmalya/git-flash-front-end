import prisma from "lib/prisma-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { image, page } = req.body;

    const screenshot = await prisma.screenshot.create({
      data: {
        image,
        page: {
          connect: { id: page.id },
        },
      },
    });

    console.log(screenshot);

    res.status(200).json(screenshot);
  }

  if (req.method === "GET") {
    const { page } = req.body;

    const sites = await prisma.screenshot.findMany({
      where: {
        pageId: page.id,
      },
    });

    res.status(200).json(sites);
  }
};
