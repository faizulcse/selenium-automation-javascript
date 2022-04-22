const {Builder, until, Browser, Key, By} = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");

let driver;

async function startDriver() {
    let options = new chrome.Options();
    options.addArguments("--headless");

    driver = await new Builder()
        .setChromeOptions(options)
        .forBrowser(Browser.CHROME)
        .build();

    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    await driver.quit();
}

async function stopDriver() {

}

startDriver().then(r => {
});

stopDriver().then(r => {
})