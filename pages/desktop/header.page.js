const Page = require('../../pages/page')
const assert = require('chai').assert

class Header extends Page {
  get url () {
    return '/'
  }

  get container () { return $('.js-content') }
  get headerMenu () { return $('.mainMenu') }
  get headerMenuItems () { return $$('.mainMenu .mainMenu__item') }

  open () {
    return super.open(this.url);
  }

  hasLoaded () {
    browser.waitUntil(() => this.container.isVisible());
  }

  getTitle() {
    const title = browser.getTitle();
    console.log(`The title is ${title}`);
  }
}
module.exports = new Header()
