module.exports = function (browser) {
  this.openBrowser = function () {
    browser
      .windowMaximize()
      .url('http://artsyjewels.com/')
      .waitForElementVisible('body', 1000);
    return browser;
  };
  this.loginMainButton = function () {
    browser
    .click('.float-right>li:nth-child(2)>a:nth-child(1)')
    .waitForElementVisible('body', 1000);
  };
  this.adminLogin = function () {
    browser
   .setValue('#id_username', 'admin@admin.com')
   .setValue('#id_password', '')
   .click('body > div.container.maincontent > div > div > div.col-md-6.login__form > form > div > div > button');
  };
  this.productRingCategory = function () {
    browser
    .click('xpath', '//li//input')
    .click('xpath', '//li[contains(text(),"Rings")]');
  };
  this.CreateProductButton = function () {
    browser
    .click('xpath', 'html/body/main/div/div/div/div[1]/form/div[2]/button');
    browser.pause(3000);
  };
  return this;
};