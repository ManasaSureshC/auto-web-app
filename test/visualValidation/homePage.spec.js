const {Eyes, Target} = require('@applitools/eyes.webdriverio')
const eyes = new Eyes()
eyes.setApiKey('2Sd6SpJLhs4lJe5djMPUnSvErOPJXBy2zItHNeBqiLs110')

const header = require('../../pages/desktop/header.page')

suite ("Home page -Visual validatio testing", function(){
    test("Navigate to MMC home page, click on Car from the top nav", async function(){
        browser.url('/en')
        header.hasLoaded()
        try{
            const viewportsize = browser.getViewportSize()
            await eyes.open(browser, 'MMC homepage', 'MMC home page test', viewportsize)

            await eyes.check('Home page', Target.window())

            browser.click('li[data-menu-item-name="Cars"]')
       
            await eyes.check('Car menu', Target.window())

            await eyes.close()

        } finally{
            await eyes.abortIfNotClosed();
        }
    })
})