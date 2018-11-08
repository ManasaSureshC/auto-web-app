const Page = require("../../page")
let newTab

const DealerLocator = require('./dealerLocator.page');

class DealerDetailsPages extends Page {

    get container()             { return $("div[class*='dealer-locator__appContainer']"); }
    get dealerName()            { return $("div[class*='headerHeading']"); }
    get dealerAddress()         { return $("p[class*='dealerAddress']"); }
    get testDrive()             { return $("a[href='Book a Test Drive']"); }  //May need to change
    get service()               { return $("a[href='Service']"); }            //May need to change  
    get getDirectionLink()      { return $("a[class*='goToDealerAddress']"); } 
    get ddHours()               { return $("div[class*='hoursContainer']"); } 
    get webAddressContact()     { return $("ul[class*='detailsList']:nth-child(1)"); } 
    get phoneNumberContact()    { return $("ul[class*='detailsList']:nth-child(2)"); } 

    verifyDealerDetail(listItem = 1) {
        let dealerDetailListData = DealerLocator.getDealerDetails();
        let dealerData = this.getDDetail()
        console.log(dealerDetailListData, dealerData)
        assert.equal(dealerDetailListData, dealerData)
    }

    getDDetail() {
        let dealershipName = this.dealerName.getText()
        let dealershipAddress = this.dealerAddress.getText()
        return {dealershipName, dealershipAddress}
    }

    verifyURL(count = 1) {
        let url = this.webAddressContact.$(` li:nth-child(${count}) a`).getText()
        return url
    }

    clickWebAddress(count = 1) {
        let currentTab = browser.getTabIds()     
        this.webAddressContact.$(` li:nth-child(${count}) a`).click()
        newTab = browser.getTabIds()
        assert.notEqual(currentTab[0], newTab[0])
    }

    verifyWebAddressURL(linkUrl) {
        browser.switchTab(newTab)
        let dealerSiteURL = browser.getUrl();
        assert.equal(linkUrl, dealerSiteURL)
    }



}
module.exports = new DealerDetailsPages();