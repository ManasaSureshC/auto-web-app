let merge = require('deepmerge');
let wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {

  specs: [
    // Fill in this spot with any tests you might want to run repeatedly, but don't commit this file with those changes.
    // './tests/**/*spec*',
  ],

  maxInstances: 1,

  capabilities: [
    {
      browserName: 'chrome',
      platform: 'macOS 10.13',
      version: 'latest'
    },
    // {
    //   browserName: 'firefox'
    // },
    // {
    // browserName: 'safari',
    // platform: 'macOS 10.13',
    // version: '10'
    // },

    // {   //mobile chrome breakpoint
    // browserName: 'chrome',
    // platform: 'macOS 10.13',
    // version: 'latest',
    // chromeOptions: {
    // args: [ 'window-size=413,736' ] //iphone 6 plus dimensions
    // }
    // },
  ],

  // required to get firefox to work locally
  services: [ 'selenium-standalone' ],
  seleniumLogs: 'selenium.log',

  waitforTimeout: 15000
  

})
