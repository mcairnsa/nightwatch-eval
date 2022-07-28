module.exports = {
    "check menu contents": function(browser) {
        browser.url("https://www.designory.com/");

        // menu contents check routing
        function checkMenu() {
            browser.verify.textContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(1) > a", "WORK");
            browser.verify.attributeContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(1) > a", "href", "work");
            browser.verify.textContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(2) > a", "ABOUT");
            browser.verify.attributeContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(2) > a", "href", "about");
            browser.verify.textContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(3) > a", "CAREERS");
            browser.verify.attributeContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(3) > a", "href", "careers");
            browser.verify.textContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a", "LOCATIONS");
            browser.verify.attributeContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a", "href", "#");
            browser.verify.textContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(5) > a", "CONTACT");
            browser.verify.attributeContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(5) > a", "href", "contact");
            browser.verify.textContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(6) > a", "NEWS");
            browser.verify.attributeContains("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(6) > a", "href", "news");
        }

        browser.click("#nav-toggle > button > span.navicon");
        checkMenu();
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(1) > a");
        browser.click("#nav-toggle > button > span.navicon");
        checkMenu();
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(2) > a");
        browser.click("#nav-toggle > button > span.navicon");
        checkMenu();
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(3) > a");
        browser.click("#nav-toggle > button > span.navicon");
        checkMenu();
        
        // checks sub menu
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a");
        browser.verify.visible("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul");
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a");
        browser.verify.not.visible("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul");

        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(5) > a");
        browser.click("#nav-toggle > button > span.navicon");
        checkMenu();
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(6) > a");
        browser.click("#nav-toggle > button > span.navicon");
        checkMenu();


        browser.end();
    },
};