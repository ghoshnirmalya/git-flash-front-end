import fetch from 'node-fetch';

const sendDataToDB = async (data, url, name) => {
  console.log(data, url, name);
  const response = await fetch("http://localhost:3000/api/screenshots", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
};

const playwright = require("playwright");

const launchPlaywright = async (name, args, url) => {
  const browser = await playwright[name].launch({
    args
  });
  const page = await browser.newPage();
  await page.goto(url);
  const buffer = await page.screenshot();
  const image = buffer.toString("base64");
  await sendDataToDB(image, url, name);
  await browser.close();
};

(async () => {
  const urlsArray = ["https://github-lighthouse-check.vercel.app/", "https://github-lighthouse-check.vercel.app/home", "https://github-lighthouse-check.vercel.app/dashboard", "https://github-lighthouse-check.vercel.app/posts/1234"];
  urlsArray.map(async url => {
    await launchPlaywright("webkit", [], url);
    await launchPlaywright("firefox", [], url);
    await launchPlaywright("chromium", [], url);
  });
})();
//# sourceMappingURL=index.modern.js.map
