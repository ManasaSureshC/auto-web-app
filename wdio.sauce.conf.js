let merge = require('deepmerge');
let wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {

  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: true,

  specs: [
    // Fill in this spot with any tests you might want to run repeatedly, but don't commit this file with those changes.
    //'./test/**/*spec*'
  ],

  maxInstances: 50,
  // host: '@ondemand.saucelabs.com',
  // path: '/wd/hub',
  // host: '162.222.72.18',
  // port: 80 or 443,

  capabilities: [

    //= ==================================================================================//
    // ---Windows platform---//
    //= ====================================================================================//

    {
      browserName: 'chrome',
      platform: 'Windows 10',
      version: '66.0',
      extendedDebugging: true,
      logLevel: 'sauce:network'
    }
    // {
    //     browserName: "MicrosoftEdge",
    //     platform: "Windows 10",
    //     version: "16.16299",
    //     extendedDebugging: true, 
    //     logLevel: 'sauce:network'
    // },
    // {
    //     browserName: "firefox",
    //     platform: "Windows 10",
    //     version: "59.0",
    //     extendedDebugging: true,
    //     logLevel: 'sauce:network'
    // },
    // {
    //     browserName: "internet explorer",
    //     platform: "Windows 10",
    //     version: "11.103",
    //     extendedDebugging: true,
    //     logLevel: 'sauce:network'
    // },
    //= ==================================================================================//
    // ---IOS platform---//
    //= ====================================================================================//
    // {
    //     browserName: "safari",
    //     platform: "macOS 10.13",
    //     version: "11.1",
    //     extendedDebugging: true,
    //     logLevel: 'sauce:network'
    // },
    // {
    //     browserName: "chrome",
    //     platform: "macOS 10.13",
    //     version: "66.0",
    //     extendedDebugging: true,
    //     logLevel: 'sauce:network'
    // },
    // {
    //     browserName: "firefox",
    //     platform: "macOS 10.13",
    //     version: "59.0",
    //     extendedDebugging: true,
    //     logLevel: 'sauce:network'
    // }

  ],

  // required to get firefox to work locally
  services: [ 'sauce', 'selenium-standalone' ],
  seleniumLogs: 'selenium.log',

  // logLevel: 'error',

  waitforTimeout: 25000

})
