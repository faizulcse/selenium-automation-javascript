const {Builder, Browser} = require("selenium-webdriver");
require("dotenv").config();
const console = require("console");

class DriverSetup {
    driver = null;

    async openBrowser() {
        this.driver = process.env.IS_REMOTE === "true" ?
            await this.getRemoteBrowser(process.env.BROWSER) : await this.getBrowser(process.env.BROWSER);
        this.driver.get(process.env.BASE_URL);
        return this.driver;
    }

    async closeBrowser() {
        await this.driver.quit();
    }

    async getBrowser(browser) {
        switch (browser) {
            case "chrome":
                return new Builder().forBrowser(Browser.CHROME).build();
            case "firefox":
                return new Builder().forBrowser(Browser.FIREFOX).build();
            case "edge":
                return new Builder().forBrowser(Browser.EDGE).build();
            default:
                console.log("Unknown browser choose: " + browser);
                break;
        }
    }

    async getRemoteBrowser(browser) {
        return new Builder().usingServer(process.env.REMOTE_HUB).forBrowser(browser).build();
    }
}

module.exports = {
    setup: new DriverSetup()
};