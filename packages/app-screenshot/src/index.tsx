import launchPlaywright from "./launch-playwright";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const init = async (siteId: string) => {
  try {
    const site = await prisma.site.findOne({
      where: {
        id: siteId,
      },
      include: {
        pages: true,
      },
    });

    console.log(site);

    site.pages.map(async (page: { id: string; url: string }) => {
      await launchPlaywright("webkit", [], page);
      await launchPlaywright("firefox", [], page);
      await launchPlaywright("chromium", [], page);
    });
  } catch (error) {
    console.log(error);
  }
};

init("8f4e8827-c627-4980-a6e8-b879e796e192");