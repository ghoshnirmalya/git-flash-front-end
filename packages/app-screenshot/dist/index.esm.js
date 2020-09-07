var _require = require("@prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

var sendDataToDB = function sendDataToDB(image, page, browserType) {
  try {
    return Promise.resolve(prisma.screenshot.create({
      data: {
        image: image,
        page: {
          connect: {
            id: page.id
          }
        }
      }
    })).then(function (screenshot) {
      return {
        screenshot: screenshot
      };
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

var playwright = require("playwright");

var launchPlaywright = function launchPlaywright(browserType, args, page) {
  try {
    return Promise.resolve(playwright[browserType].launch({
      args: args
    })).then(function (browser) {
      return Promise.resolve(browser.newPage()).then(function (browserPage) {
        return Promise.resolve(browserPage["goto"](page.url)).then(function () {
          return Promise.resolve(browserPage.screenshot()).then(function (buffer) {
            var image = buffer.toString("base64");
            return Promise.resolve(sendDataToDB(image, page, browserType)).then(function () {
              return Promise.resolve(browser.close()).then(function () {});
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

var _require$1 = require("@prisma/client"),
    PrismaClient$1 = _require$1.PrismaClient;

var prisma$1 = new PrismaClient$1();

var init = function init(siteId) {
  try {
    var _temp2 = _catch(function () {
      return Promise.resolve(prisma$1.site.findOne({
        where: {
          id: siteId
        },
        include: {
          pages: true
        }
      })).then(function (site) {
        console.log(site);
        site.pages.map(function (page) {
          try {
            return Promise.resolve(launchPlaywright("webkit", [], page)).then(function () {
              return Promise.resolve(launchPlaywright("firefox", [], page)).then(function () {
                return Promise.resolve(launchPlaywright("chromium", [], page)).then(function () {});
              });
            });
          } catch (e) {
            return Promise.reject(e);
          }
        });
      });
    }, function (error) {
      console.log(error);
    });

    return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
  } catch (e) {
    return Promise.reject(e);
  }
};

init("8f4e8827-c627-4980-a6e8-b879e796e192");
//# sourceMappingURL=index.esm.js.map
