import fetcher from "lib/fetcher";

const sendDataToDB = async (
  image: any,
  page: { id: string; url: string },
  browser: string
) => {
  console.log(`========== Sending data to DB for ${browser} ==========`);

  const response = await fetcher("api/screenshots", "POST", {
    image,
    page: {
      id: page.id,
    },
  });

  console.log(`========== Response from DB ==========`);
  console.log(response);
  console.log(`========== /Response from DB ==========`);

  console.log(`========== /Sending data to DB for ${browser} ==========`);
};

export default sendDataToDB;
