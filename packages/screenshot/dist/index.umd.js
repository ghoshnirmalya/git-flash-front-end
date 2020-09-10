(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('node-fetch')) :
  typeof define === 'function' && define.amd ? define(['node-fetch'], factory) :
  (global = global || self, factory(global.nodeFetch));
}(this, (function (fetch) {
  fetch = fetch && Object.prototype.hasOwnProperty.call(fetch, 'default') ? fetch['default'] : fetch;

  var sendDataToDB = function sendDataToDB(data, url, name) {
    try {
      console.log(data, url, name);
      return Promise.resolve(fetch("http://localhost:3000/api/screenshots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })).then(function (response) {
        return response.json();
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var playwright = require("playwright");

  var launchPlaywright = function launchPlaywright(name, args, url) {
    try {
      return Promise.resolve(playwright[name].launch({
        args: args
      })).then(function (browser) {
        return Promise.resolve(browser.newPage()).then(function (page) {
          return Promise.resolve(page["goto"](url)).then(function () {
            return Promise.resolve(page.screenshot()).then(function (buffer) {
              var image = buffer.toString("base64");
              return Promise.resolve(sendDataToDB(image, url, name)).then(function () {
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

  try {
    var urlsArray = ["https://github-lighthouse-check.vercel.app/", "https://github-lighthouse-check.vercel.app/home", "https://github-lighthouse-check.vercel.app/dashboard", "https://github-lighthouse-check.vercel.app/posts/1234"];
    urlsArray.map(function (url) {
      try {
        return Promise.resolve(launchPlaywright("webkit", [], url)).then(function () {
          return Promise.resolve(launchPlaywright("firefox", [], url)).then(function () {
            return Promise.resolve(launchPlaywright("chromium", [], url)).then(function () {});
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    });
  } catch (e) {
    Promise.reject(e);
  }

})));
//# sourceMappingURL=index.umd.js.map
