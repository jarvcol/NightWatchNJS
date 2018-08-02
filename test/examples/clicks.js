module.exports = {
    '@tags' : ['clicks'],
    'We are going to click on a button': function(browser){
        browser
            .url('https://clickclickclick.click')
            .waitForElementVisible('body',5000)
            .click('a[class=button]')
            .pause(10000)
            .end();
        console.log('Hello word click')
    }
}