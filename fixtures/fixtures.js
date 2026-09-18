const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { captureScreenshot } = require('../utils/screenshot');

const testData = require('../test-data/testData.json');

const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      testData.validUser.email,
      testData.validUser.password
    );

    await use(page);
  },

  screenshotOnFailure: [
    async ({ page }, use, testInfo) => {
      await use();

      if (testInfo.status !== testInfo.expectedStatus) {
        await captureScreenshot(page, testInfo);
      }
    },
    { auto: true },
  ],
});

module.exports = {
  test,
  expect: base.expect,
};