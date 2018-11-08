const Page = require("../../page");

class DealerLocator extends Page{

    get dealerDetailsPage() { return DealerDetailsPage; }

    get url() { 
        return '/en/QA/dealerlocator'
    }
         
    get container()             { return $("div[class*='dealer-locator__appContainer']"); }
    get searchForm()            { return $("input[id*='dealer-locator__searchDealers']"); }
    get resultLabel()           { return $("div[class*='dealer-list__statusLabel']"); }
    get resultList()            { return $$("li div[class*='dealer-list__row']"); }
    get pinMaker()              { return $$("li div[class*='pinMarker']"); }
    get dealerNameList()        { return $$("h2[class*='dealerName']"); }
    get dealerAddressList()     { return $$("p[class*='dealerAddress']"); }
    get testDrive()             { return $$("a[href='Book a Test Drive']"); }
    get service()               { return $$("a[href='Service']"); }
       
    open() {
        return super.open(this.url);
    }

    hasLoaded() {
        browser.waitUntil(()=> this.container.isExisting(), 5000, "The Dealer locator component is not visible on the page")
        return this;
    }

    enterLocation(location = 'London, UK') {
        this.searchForm.setValue(location);
        browser.keys('Enter'); 
    }

    verifyResultList() {
        this.resultLabel.waitForVisible()
        let dealerNumbers = this.resultLabel.getText().slice(0,2)
        assert.equal(dealerNumbers , this.resultList.length)
    }

    verifyListItemAttributes() {
        for(let i = 0; i < (Math.random() * this.resultList.length); i++) {
            this.pinMaker[i].isVisible();
            this.dealerNameList[i].isVisible();
            this.dealerAddressList[i].isVisible();
            this.testDrive[i].isVisible();
            this.service[i].isVisible();
        }
    }

    clickOnDealer(listItem = '1') {
        this.resultList[listItem].click();
    }

    getDealerDetails(listItem = '1') {
        let dealershipName = this.dealerNameList[listItem].getText();
        let dealershipAddress = this.dealerAddressList[listItem].getText();
        return {dealershipName, dealershipAddress}
        console.log(dealershipName, dealershipAddress)
    }

    

   
}
module.exports = new DealerLocator();
 