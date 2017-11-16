var webdriver = require("selenium-webdriver"),
  chrome = require("selenium-webdriver/chrome"),
  firefox = require("selenium-webdriver/firefox");

var driver = new webdriver.Builder()
  .forBrowser("chrome")
  .setChromeOptions(/* ... */)
  .setFirefoxOptions(/* ... */)
  .build();

driver.get("https://www.krungsrionline.com/BAY.KOL.WebSite/Common/Login.aspx");

var element = driver.findElement(
  webdriver.By.xpath('//*[@id="ctl00_cphForLogin_username"]')
);
element.sendKeys("Cheese!");
// element.submit();

var passElement = driver.findElement(
  webdriver.By.xpath('//*[@id="ctl00_cphForLogin_password"]')
);
passElement.sendKeys("Cheese!");

var btn = driver.findElement(
  webdriver.By.xpath('//*[@id="ctl00_cphForLogin_lbtnLoginNew"]')
);

btn.click();

driver.getTitle().then(function(title) {
  console.log("Page title is: " + title);
});

driver.wait(function() {
  return driver.getTitle().then(function(title) {
    return title.toLowerCase().lastIndexOf("cheese!", 0) === 0;
  });
}, 3000);

driver.getTitle().then(function(title) {
  console.log("Page title is: " + title);
});

// driver.quit();
