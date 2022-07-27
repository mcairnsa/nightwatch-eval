module.exports = {
    "cookie notice": function(browser) {
        browser.url("https://www.designory.com/");

        // checks that cookie popup works as expected on first pass
        browser.verify.elementPresent("#CybotCookiebotDialog");
        browser.verify.visible("#CybotCookiebotDialog");
        browser.click("#CybotCookiebotDialogBodyButtonAccept");
        browser.verify.not.visible("#CybotCookiebotDialog");

        // checks that the cookie notice goes away after accept on refresh
        browser.refresh();
        browser.verify.not.elementPresent("#CybotCookiebotDialog");

        // clears cookies
        browser.deleteCookies();
        browser.refresh();
        
        // checks that the cookie notice shows up again and works like before
        browser.verify.elementPresent("#CybotCookiebotDialog");
        browser.verify.visible("#CybotCookiebotDialog");
        browser.click("#CybotCookiebotDialogBodyButtonAccept");
        browser.verify.not.visible("#CybotCookiebotDialog");

        browser.end();
    }
};