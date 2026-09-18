const { test, expect } = require('../fixtures/fixtures');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');

const testData = require('../test-data/testData.json');

test('User should be able to add a product to the cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homePage.open();

  await homePage.searchProduct(testData.product.name);

  await homePage.openProduct(testData.product.name);

  await productPage.addToCart();

  await productPage.expectProductAddedToCart();

  await expect(
    page.getByText('Product added to shopping cart.')
  ).toBeVisible();
});