const heroSection = require(`../../../pages/${platformName}/HomePage/heroSection.page`);

suite.skip('VLP - Hero Section component', function(){//Remove the .skip in the suit level to run the test.
    //Commenting in suite level as the component is ot availbale in any live app for testing

    setup("Open delaer locator component and wait for it to load completely", function() {
        heroSection.open();
        heroSection.hasLoaded();
    })

    test("Verify the Hero Section components", function(){
        heroSection.vehicleName.isVisible();
        heroSection.vehicleTagName.isVisible();
        heroSection.vehiclePrice.isVisible();
    });

    test("Verify if the key feature section has 4 reasons to buy", function(){
        heroSection.verifyKeyFeatures();
    })

})
