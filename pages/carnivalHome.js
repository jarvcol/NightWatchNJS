module.exports = function (browser) {
    this.openBrowser = function () {
      browser
        .windowMaximize()
        .url('https://www.carnival.com/')
        .waitForElementVisible('body', 1000);
      return browser;
    };
    this.verifyPage = function () {
      browser.assert.title("Cruises | Carnival Cruise Deals: Caribbean, Bahamas, Alaska, Mexico");
    };
    return this;
  };