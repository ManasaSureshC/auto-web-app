const Page = require("../../page");

class HeroSection extends Page{

    get url() { 
        return '/en'
    }
         
    get container()             { return $("div[automation='automationValue']"); }
    get vehicleName()           { return $("h2[class*='hero-section__headlineType']"); }
    get vehicleTagName()        { return $("h1[class*='hero-section__headlineLong']"); }
    get vehiclePrice()          { return $("h4[class*='hero-section__headlinePrice']"); }
    get keyFeatures()           { return $$("div[class*='theme-default'] > [class*='hero-section__oneFeature']"); }
       
    open() {
        return super.open(this.url);
    }

    hasLoaded() {
        browser.waitUntil(()=> this.container.isExisting(), 5000, "The Hero Section component is not visible on the page")
        return this;
    }

    verifyKeyFeatures() {
        assert.equal(this.keyFeatures.length, 4)
    }
}
module.exports = new HeroSection();
 