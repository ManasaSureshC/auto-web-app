class Page {
    hasLoaded() {}

    open(path) {
        if(typeof(path)==undefined) { path = "/errorpage"; }
        browser.url(path);
        this.hasLoaded();
        return this;
    }
}

module.exports = Page;