module.exports = function (browser) {
    this.openBrowser = function () {
      browser
        .windowMaximize()
        .url('https://www.carnival.com/')
        .waitForElementVisible('body', 5000);
      return browser;
    };
    this.verifyPage = function () {
      browser.verify.title("Cruises | Carnival Cruise Deals: Caribbean, Bahamas, Alaska, Mexico");
    };
    this.clickSailTo = function () {
      browser
      .click('#cdc-destinations')
      .waitForElementVisible('.cdc-filter-body', 5000);
    };
    this.setSailToValue = function(){
      browser
      .useXpath()
      .click("//button[@aria-label='The Bahamas ']")
      .waitForElementVisible('//article', 5000);
    };
    this.clickDuration = function () {
      browser
      .useCss()
      .click('#cdc-durations')
      .waitForElementVisible('.cdc-filter-body', 5000);
    };
    this.setDuration = function(){
      browser
      .useXpath()
      .click("//button[@aria-label='6 - 9 Days ']")
      .waitForElementVisible('//article', 5000);
    };
    this.assertGridView = function(){
      browser
      .useCss()
      .assert.elementPresent("ccl-view-result-grid",'Page is not displaying the grid as default view')
    };
    this.clickPricingFilter = function(){
      browser
      .useCss()
      .click('#sfn-nav-pricing')
      .waitForElementVisible('.rz-pointer.rz-pointer-min', 5000);
    };
    this.moveSliderMinToRight = function(){
      browser
      .useCss()
      .getAttribute('#sfn-nav-pricing','aria-expanded', function(result) {
        if (result.value.toString() == 'false')
          clickPricingFilter();
      });
      var cycle = 20;
      while(cycle != 0){
        browser.setValue('.rz-pointer.rz-pointer-min', browser.Keys.RIGHT_ARROW)
        .waitForElementVisible('article', 5000);
        cycle = cycle -1 ;
      };
    };
    this.moveSliderMaxToLeft = function(){
      browser
      .useCss()
      .getAttribute('#sfn-nav-pricing','aria-expanded', function(result) {
        if (result.value.toString() == 'false')
          clickPricingFilter();
      });
      var cycle = 20;
      while(cycle != 0){
        browser.setValue('.rz-pointer.rz-pointer-max', browser.Keys.LEFT_ARROW)
        .waitForElementVisible('article', 5000);
        cycle = cycle -1 ;
      };
    };
    this.clickResetValues = function(){
      browser
      .useCss()
      .click(".sfp-reset__button")
    };
    this.assertSliderFunction = function(){
      browser
      .useCss()
      .waitForElementVisible('.rz-pointer.rz-pointer-min', 5000)
      .getAttribute('.rz-pointer.rz-pointer-min','aria-valuenow', function(filterValue) {
        browser
        .waitForElementVisible('p+.vrgf-price-box__price-info', 5000)
        .getText('p+.vrgf-price-box__price-info', function(articleValue) {
          console.log("filterValue "+filterValue.value.toString());
          console.log("articleValue "+JSON.stringify(articleValue.value).toString().replace(/\D/g, ""));
          browser.assert.equal((JSON.stringify(articleValue.value).toString().replace(/\D/g, "") >= filterValue.value.toString()) ? true : false
          , true, 'Slider filter is not working properly');
        });
      });
    };
    return this;
  };