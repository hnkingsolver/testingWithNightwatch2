module.exports = {
    //what we are testing and then make testibng function calling
    //the browser object that houses everything from selenium
    "css and xpath": function(browser) {
        //navigate to the page
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html")
        browser.pause(1 * 1000)

        const cssSelector = "#text-input"
        const xpathSelector = '//*[@id="text-input"]'

        //using xpath to set value on webpage
        browser.useXpath()
        browser.setValue(xpathSelector, "This is XPath")
        browser.pause(2 * 1000)
        // clear value from xpath then use css to set value on webpage
        browser.useCss()
        browser.clearValue(cssSelector)
        browser.setValue(cssSelector, "This is CSS YAY")
        browser.pause(2 * 1000)


        browser.end()
    },

    "The next test.. something to be cautious of": function(browser) {
        //navigate to the page
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html")
        browser.pause(1 * 1000)

        const cssSelector = "#text-input"
        const xpathSelector = '//*[@id="text-input"]'

       
        // clear value from xpath then use css to set value on webpage
        //once we start a new test in the same suite... or same file,
        //we always ALWAYS will need "browser.useCss()" or else we
        //will get a bunch of errors
        browser.useCss()
        browser.clearValue(cssSelector)
        browser.setValue(cssSelector, "This is CSS again YAY")
        browser.pause(2 * 1000)
    }
}