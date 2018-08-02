module.exports = {
    '@tags':['demo'],
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .click('input[name=btnI]')
        .pause(4000)
        .end();
    }
  };