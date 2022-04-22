const fs = require('fs');
const {Builder, Browser, By, Key, until} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const Console = require("console");

describe('Google feature tests', () => {
    let driver;
    beforeEach(async () => {
        let options = new chrome.Options();
        options.addArguments(["--headless"]);

        driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(options)
            .build();
    });

    afterEach(async () => {
        await driver.quit();
    });

    it('should open google search', async () => {
        await driver.get('https://www.google.com');
        Console.log("Tile ===> " + await driver.getTitle());
        await driver.getTitle().then(title => {
            expect(title).toEqual('Google');
        });
    });

    it('should open google search and view search results', async () => {
        await driver.get('https://www.google.com');
        Console.log("Tile ===> " + await driver.getTitle());
        let element = driver.findElement(By.name("q"));
        element.sendKeys("selenium", Key.RETURN);
        await driver.wait(until.titleContains("selenium"), 10000);
        await driver.getTitle().then(title => {
            expect(title).toEqual('selenium - Google Search');
        });
    });
});