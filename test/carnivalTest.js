var carnivalHome = require('../pages/carnivalHome');
module.exports = {
    '@tags': ['carnival'],
    before: function (browser) {
        carnivalHome(browser).openBrowser();
    },
    'Verify Page': function (browser) {
      carnivalHome(browser).verifyPage();
    },
    after: function (browser) {
      browser.pause(5000);
      browser.end();
    }
  };