var carnivalHome = require('../pages/carnivalHome');
module.exports = {
    '@tags': ['carnival'],
    before: function (browser) {
        carnivalHome(browser).openBrowser();
    },
    'Verify Page': function (browser) {
      carnivalHome(browser).verifyPage();
    },
    'Click on sail to filter': function (browser) {
      carnivalHome(browser).clickSailTo();
    },
    'Set SailTo value': function (browser) {
      carnivalHome(browser).setSailToValue();
    },
    'Click on duration filter': function (browser) {
      carnivalHome(browser).clickDuration();
    },
    'Set duration value': function (browser) {
      carnivalHome(browser).setDuration();
    },
    'Assert the grid view is shown': function (browser) {
      carnivalHome(browser).assertGridView();
    },
    'Assert Min to Max': function (browser) {
      carnivalHome(browser).assertSortOrderMinToMax();
    },
    'Move min value slider': function (browser) {
      carnivalHome(browser).moveSliderMinToRight();
      browser.pause(2000);
    },
    'Assert slider function min': function (browser) {
      carnivalHome(browser).assertSliderFunctionMin();
    },
    'Reset value of slider': function (browser) {
      carnivalHome(browser).clickResetValues();
    },
    'Sort button pressed': function (browser) {
      //I am doing this to get higher value first, 
      //so can assert the order and perform
      //easily the slider max value filter
      carnivalHome(browser).clickSortButton();
      browser.pause(2000);
    },
    'Assert Max to Min': function (browser) {
      carnivalHome(browser).assertSortOrderMaxToMin();
    },
    'Move max value slider': function (browser) {
      carnivalHome(browser).moveSliderMaxToLeft();
      browser.pause(2000);
    },
    'Assert slider function max': function (browser) {
      carnivalHome(browser).assertSliderFunctionMax();
    },
    after: function (browser) {
      browser.pause(5000);
      browser.end();
    }
  };