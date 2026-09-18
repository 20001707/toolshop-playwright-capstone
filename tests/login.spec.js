const { test, expect } = require('../fixtures/fixtures');
const { LoginPage } = require('../pages/LoginPage');

const testData = require('../test-data/testData.json');

test('User should be able to login successfully', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/\/account/);
});

test('User should see an error for invalid login credentials', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login('invalid@gmail.com', 'password');

  await loginPage.expectInvalidLoginMessage();

  await expect(loginPage.loginErrorMessage).toBeVisible();
});