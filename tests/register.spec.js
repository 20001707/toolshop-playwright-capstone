const { test, expect } = require('../fixtures/fixtures');
const { RegisterPage } = require('../pages/RegisterPage');

const testData = require('../test-data/testData.json');

test('Registration form should accept valid user details', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();

  await registerPage.register(testData.registrationUser);

  await expect(registerPage.registerButton).toBeEnabled();
});