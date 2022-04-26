const console = require("console");
const {By, Key, until} = require("selenium-webdriver");
const {setup} = require("../utils/DriverSetup.js");

describe('Google feature tests', () => {
    beforeEach(async () => {
        this.driver = await setup.openBrowser();
    });

    afterEach(async () => {
        await setup.closeBrowser();
    });

    it('should open google search', async () => {
        console.log("Title ===> " + await this.driver.getTitle());
        await this.driver.getTitle().then(title => {
            expect(title).toEqual('Google');
        });
    });

    it('should open google search and view search results', async () => {
        console.log("Title ===> " + await this.driver.getTitle());
        let element = await this.driver.findElement(By.name("q"));
        element.sendKeys("selenium", Key.RETURN);
        await this.driver.wait(until.titleContains("selenium"), 10000);
        await this.driver.getTitle().then(title => {
            expect(title).toEqual('selenium - Google Search');
        });
    });
});