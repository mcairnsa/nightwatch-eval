module.exports = {
    "Assert Location": function(browser) {
        browser.url("https://www.designory.com/locations/chicago");

        // Verify that Chicago location is present on the page
        browser.verify.elementPresent("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(2) > a");
        browser.verify.textContains("#body", "Chicago");

        browser.end();
    },
};