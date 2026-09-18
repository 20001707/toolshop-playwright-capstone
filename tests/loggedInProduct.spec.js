const { test, expect } = require('../fixtures/fixtures');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');

const testData = require('../test-data/testData.json');

test('Logged-in user should be able to add a product to the cart', async ({
  loggedInPage,
}) => {
  const homePage = new HomePage(loggedInPage);
  const productPage = new ProductPage(loggedInPage);

  await homePage.open();

  await homePage.searchProduct(testData.product.name);

  await homePage.openProduct(testData.product.name);

  await productPage.addToCart();

  await productPage.expectProductAddedToCart();

  await expect(productPage.successToast).toBeVisible();
});