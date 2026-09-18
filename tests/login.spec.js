const { test, expect } = require('../fixtures/fixtures');

test('User should be able to login successfully', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/\/account/);
});