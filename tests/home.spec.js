const { test, expect } = require('../fixtures/fixtures');
const { HomePage } = require('../pages/HomePage');

const testData = require('../test-data/testData.json');

test('User should be able to search for a product', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.searchProduct(testData.product.name);

  await expect(
    page.getByText(testData.product.name, { exact: true }).first()
  ).toBeVisible();
});

test('User should see no results for an invalid product search', async ({
  page,
}) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.searchProduct('XYZInvalidProduct123');

  await expect(page.getByText(/no products/i)).toBeVisible();
});

test('User should be able to sort products from A to Z', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.sortProducts('Name (A - Z)');

  await expect(homePage.sortDropdown).toHaveValue(/name.*asc/i);
});

test('User should be able to filter products by Hand Tools category', async ({
  page,
}) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.selectHandToolsCategory();

  await expect(page).toHaveURL(/\/category\/hand-tools/);
});

test('User should be able to navigate to page 2', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.goToPageTwo();

  await expect(homePage.page2Button).toBeVisible();
});