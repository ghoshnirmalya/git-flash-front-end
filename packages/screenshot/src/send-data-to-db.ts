const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const sendDataToDB = async (
  image: any,
  page: { id: string; url: string },
  browser: string
) => {
  console.log(`========== Sending data to DB for ${browser} ==========`);

  const screenshot = await prisma.screenshot.create({
    data: {
      image,
      browser,
      page: {
        connect: { id: page.id },
      },
    },
  });

  console.log(`========== /Sending data to DB for ${browser} ==========`);

  return {
    screenshot,
  };
};

export default sendDataToDB;
