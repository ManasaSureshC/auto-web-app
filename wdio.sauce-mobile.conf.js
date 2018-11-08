let merge = require('deepmerge');
let wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {

  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

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
    {// Android mobile
      // appiumVersion: "1.8.0",
      deviceName: 'Android GoogleAPI Emulator',
      deviceOrientation: 'portrait',
      browserName: 'chrome',
      platformVersion: '7.0',
      platformName: 'Android',
      extendedDebugging: true,
      logLevel: 'sauce:network'
    }
    // {//IOS mobile
    //     appiumVersion: "1.8.1",
    //     deviceName: "iPhone X Simulator",
    //     deviceOrientation: "portrait",
    //     platformVersion: "11.3",
    //     platformName: "iOS",
    //     browserName: "Safari",
    //     extendedDebugging: true,
    //     logLevel: 'sauce:network'
    // },
    // {//Android Tab
    //     appiumVersion: "1.8.0",
    //     deviceName: "Samsung Galaxy Tab S3 GoogleAPI Emulator",
    //     deviceOrientation: "portrait",
    //     browserName: "Chrome",
    //     platformVersion: "7.1",
    //     platformName: "Android",
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
