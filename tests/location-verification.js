module.exports = {
    "Verify Location": function(browser) {
        browser.url("https://www.designory.com/locations/chicago");

        // verify that Chicago location is present on the page
        browser.verify.elementPresent("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(2) > a");
        browser.verify.textContains("#body", "Chicago");
        browser.verify.titleContains("Chicago");
        browser.verify.urlContains("chicago");

        browser.end();
    },

    "Verify Contents": function(browser) {
        browser.url("https://www.designory.com/locations/chicago");

        // verify the h1 tag contents
        browser.verify.textEquals("#body > div.immersive-hero > div.immersive-content-box > div > h1", "CHI");
        // verify the phone contents
        browser.verify.textEquals("#body > div.container.location-detail > div > div.grid-12.grid-md-5.grid-xl-6 > div > div:nth-child(2) > div > p", "Phone: +1 312 729 4500");
        // verify font size is 40px, dynamic page changes font size if the window is too small
        browser.fullscreenWindow();
        browser.verify.cssProperty("#body > div.container.location-detail > div > div.grid-12.grid-md-7.grid-xl-6 > h2", "font-size", "40px");
        // verify map URL
        browser.verify.attributeContains(
            "#body > div.container.location-detail > div > div.grid-12.grid-md-5.grid-xl-6 > div > div:nth-child(1) > div > a", 
            "href", 
            "http://maps.google.com/?q= 225 N Michigan Ave, Suite 2100 Chicago, IL 60601"
        );

        browser.end();
    },
};