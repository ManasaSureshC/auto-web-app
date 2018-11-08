const dealerLocator = require(`../../pages/${platformName}/DealerLocator/dealerLocator.page`)
const dealerDetails = require(`../../pages/${platformName}/DealerLocator/dealerDetails.page`)

suite.skip("Dealer locator testing", function(){ //Remove the .skip in the suit level to run the test.
    //Commenting in suite level as the component is ot availbale in any live app for testing

    suiteSetup("Open dealer locator page and wait to load completely", function(){
        dealerLocator.open().hasLoaded();
        dealerLocator.enterLocation();
    })

    test("Verify the result list number and the dealer lists are equal", function(){
        dealerLocator.verifyResultList()     
    })

    test("Verify the attribues in the search result list", function(){
        dealerLocator.verifyListItemAttributes();
    })

    test("Verify feature of Dealer details page", function(){
        dealerLocator.clickOnDealer(3);
        dealerLocator.dealerDetailsPage.verifyDealerDetail(3);
    })

    test.skip("Verify the contact sites take the user to the respective site", function(){
        dealerLocator.clickOnDealer(3);
        let url = dealerDetails.verifyURL();
        console.log(url)
        dealerDetails.clickWebAddress();        
        dealerDetails.verifyWebAddressURL(url);
    })

})