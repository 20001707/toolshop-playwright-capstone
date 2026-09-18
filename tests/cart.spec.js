const { test, expect } = require('../fixtures/fixtures');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');

const testData = require('../test-data/testData.json');

test('User should be able to open cart after adding a product', async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await homePage.open();

  await homePage.searchProduct(testData.product.name);

  await homePage.openProduct(testData.product.name);

  await cartPage.addProductToCart();

  await expect(cartPage.cartQuantity).toHaveText('1');

  await cartPage.openCart();

  await expect(page).toHaveURL(/\/checkout/);
});