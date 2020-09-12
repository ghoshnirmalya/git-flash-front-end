require("dotenv").config();

import fetcher from "lib/fetcher";
import launchPlaywright from "lib/launch-playwright";
import ISite from "types/site";

const init = async (siteId: string) => {
  console.log("========== Init ==========");

  try {
    const site: ISite = await fetcher(`api/site/${siteId}`);

    console.log("========== Site details ==========");
    console.log(site);
    console.log("========== /Site details ==========");

    site.pages?.map(async (page: { id: string; url: string }) => {
      await launchPlaywright("webkit", [], page);
      await launchPlaywright("firefox", [], page);
      await launchPlaywright("chromium", [], page);

      process.exit(0);
    });
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

init("009f38b4-202a-4db4-a225-75f3b0eb7e13");
