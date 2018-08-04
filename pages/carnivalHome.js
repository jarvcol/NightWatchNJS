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
      .assert.elementPresent("ccl-view-result-grid",'Page is not displaying the grid as default view');
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
      var cycle = 15;
      while(cycle != 0){
        browser.setValue('.rz-pointer.rz-pointer-min', browser.Keys.RIGHT_ARROW)
        .waitForElementVisible('.rz-pointer.rz-pointer-min', 5000)
        .waitForElementVisible('article', 5000)
        .waitForElementVisible('.sbsc-container__result-count', 5000);
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
      var cycle = 15;
      while(cycle != 0){
        browser.setValue('.rz-pointer.rz-pointer-max', browser.Keys.LEFT_ARROW)
        .waitForElementVisible('.rz-pointer.rz-pointer-max', 5000)
        .waitForElementVisible('article', 5000)
        .waitForElementVisible('.sbsc-container__result-count', 5000);
        cycle = cycle -1 ;
      };
    };
    this.clickResetValues = function(){
      browser
      .useCss()
      .click(".sfp-reset__button");
      console.log('Default slider values');
    };
    this.clickSortButton = function(){
      browser
      .useCss()
      .click(".sbsc-container__sort-options");
      console.log('Pressing sort button');
    };
    this.assertSliderFunctionMin = function(){
      browser
      .useCss()
      .waitForElementVisible('article', 5000)
      .waitForElementVisible('.rz-pointer.rz-pointer-min', 5000)
      .getAttribute('.rz-pointer.rz-pointer-min','aria-valuenow', function(filterValue) {
        browser
        .getText('p+.vrgf-price-box__price-info', function(articleValue) {
          console.log('AssertSliderFunctionMin');
          console.log('filterValue.value '+filterValue.value.toString());
          console.log('articleValue.value '+JSON.stringify(articleValue.value).toString().replace(/\D/g, ""));
          browser
          .assert.equal((parseInt(JSON.stringify(articleValue.value).toString().replace(/\D/g, "")) >= parseInt(filterValue.value.toString())) ? true : false
          , true, 'Slider filter is not working properly');
        });
      });
    };
    this.assertSliderFunctionMax = function(){
      browser
      .useCss()
      .waitForElementVisible('article', 5000)
      .waitForElementVisible('.rz-pointer.rz-pointer-max', 5000)
      .getAttribute('.rz-pointer.rz-pointer-max','aria-valuenow', function(filterValue) {
        browser
        .getText('p+.vrgf-price-box__price-info', function(articleValue) {
          console.log('AssertSliderFunctionMax');
          console.log('filterValue.value '+filterValue.value.toString());
          console.log('articleValue.value '+JSON.stringify(articleValue.value).toString().replace(/\D/g, ""));
          browser
          .assert.equal((parseInt(JSON.stringify(articleValue.value).toString().replace(/\D/g, "")) <= parseInt(filterValue.value.toString())) ? true : false
          , true, 'Slider filter is not working properly');
        });
      });
    };
    this.assertSortOrderMinToMax = function(){
      browser
      .useCss()
      .waitForElementVisible('p+.vrgf-price-box__price-info', 5000)
      .elements('css selector','p+.vrgf-price-box__price-info', function(articleList){
        browser
        .getText('p+.vrgf-price-box__price-info', function(firstValue) {
          browser
          .useXpath()
          .getText("//article["+articleList.value.length+"]//p[@class='vrgf-price-box__price-info']", function(lastValue) {
            console.log('Lista Min to Max '+articleList.value.length);
            console.log('Primero '+JSON.stringify(firstValue.value).toString().replace(/\D/g, ""));
            console.log('Ultimo '+JSON.stringify(lastValue.value).toString().replace(/\D/g, ""));
            browser.assert.equal((parseInt(JSON.stringify(firstValue.value).toString().replace(/\D/g, "")) <= parseInt(JSON.stringify(lastValue.value).toString().replace(/\D/g, ""))) ? true : false
            , true, 'Order is not Min to Max');
          }); 
        });
      });
    };
    this.assertSortOrderMaxToMin= function(){
      browser
      .useCss()
      .waitForElementVisible('p+.vrgf-price-box__price-info', 5000)
      .elements('css selector','p+.vrgf-price-box__price-info', function(articleList){
        browser
        .getText('p+.vrgf-price-box__price-info', function(firstValue) {
          browser
          .useXpath()
          .getText("//article["+articleList.value.length+"]//p[@class='vrgf-price-box__price-info']", function(lastValue) {
            console.log('Lista Max to Min '+articleList.value.length);
            console.log('Primero '+JSON.stringify(firstValue.value).toString().replace(/\D/g, ""));
            console.log('Ultimo '+JSON.stringify(lastValue.value).toString().replace(/\D/g, ""));
            browser.assert.equal((parseInt(JSON.stringify(firstValue.value).toString().replace(/\D/g, "")) >= parseInt(JSON.stringify(lastValue.value).toString().replace(/\D/g, ""))) ? true : false
            , true, 'Order is not Max to Min');
          }); 
        });
      });
    };
    return this;
  };