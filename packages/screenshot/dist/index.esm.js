import fetch from 'node-fetch';

const fetcher = function (url, method = "GET", body) {
  try {
    const params = {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    const apiEndpoint = process.env.NODE_ENV !== "development" ? `https://git-flash-dashboard.vercel.app/${url}` : `${process.env.API_URL}/${url}`;
    console.log("========== URL ==========");
    console.log(apiEndpoint);
    console.log("========== /URL ==========");
    return Promise.resolve(fetch(apiEndpoint, params)).then(function (response) {
      return response.json();
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

const sendDataToDB = function (image, page, browser) {
  try {
    console.log(`========== Sending data to DB for ${browser} ==========`);
    return Promise.resolve(fetcher("api/screenshots", "POST", {
      image,
      page: {
        id: page.id
      }
    })).then(function (response) {
      console.log(`========== Response from DB ==========`);
      console.log(response);
      console.log(`========== /Response from DB ==========`);
      console.log(`========== /Sending data to DB for ${browser} ==========`);
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

const playwright = require("playwright");

const launchPlaywright = function (browserType, args, page) {
  try {
    console.log(`========== Running Playwright for ${browserType} ==========`);
    return Promise.resolve(playwright[browserType].launch({
      args
    })).then(function (browser) {
      return Promise.resolve(browser.newPage()).then(function (browserPage) {
        return Promise.resolve(browserPage.goto(page.url)).then(function () {
          return Promise.resolve(browserPage.screenshot()).then(function (buffer) {
            const image = buffer.toString("base64");
            return Promise.resolve(sendDataToDB(image, page, browserType)).then(function () {
              return Promise.resolve(browser.close()).then(function () {
                console.log(`========== /Running Playwright for ${browserType} ==========`);
              });
            });
          });
        });
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}

require("dotenv").config();

const init = function (siteId) {
  try {
    console.log("========== Init ==========");

    const _temp = _catch(function () {
      return Promise.resolve(fetcher(`api/site/${siteId}`)).then(function (site) {
        var _site$pages;

        console.log("========== Site details ==========");
        console.log(site);
        console.log("========== /Site details ==========");
        (_site$pages = site.pages) == null ? void 0 : _site$pages.map(function (page) {
          try {
            return Promise.resolve(launchPlaywright("webkit", [], page)).then(function () {
              return Promise.resolve(launchPlaywright("firefox", [], page)).then(function () {
                return Promise.resolve(launchPlaywright("chromium", [], page)).then(function () {
                  process.exit(0);
                });
              });
            });
          } catch (e) {
            return Promise.reject(e);
          }
        });
      });
    }, function (error) {
      console.error(error);
      process.exit(1);
    });

    return Promise.resolve(_temp && _temp.then ? _temp.then(function () {}) : void 0);
  } catch (e) {
    return Promise.reject(e);
  }
};

init("009f38b4-202a-4db4-a225-75f3b0eb7e13");
//# sourceMappingURL=index.esm.js.map
