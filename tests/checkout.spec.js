const { test, expect } = require('../fixtures/fixtures');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

const testData = require('../test-data/testData.json');

test('Guest user should be able to proceed to checkout login', async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.open();

  await homePage.searchProduct(testData.product.name);

  await homePage.openProduct(testData.product.name);

  await productPage.addToCart();

  await cartPage.openCart();

  await checkoutPage.proceedToCheckout();

  await expect(checkoutPage.emailInput).toBeVisible();
  await expect(checkoutPage.passwordInput).toBeVisible();
});

test('User should be able to complete checkout after login', async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.open();

  await homePage.searchProduct(testData.product.name);

  await homePage.openProduct(testData.product.name);

  await productPage.addToCart();

  await cartPage.openCart();

  // Step 1 - Checkout Login
  await checkoutPage.proceedToCheckout();

  await checkoutPage.loginForCheckout(
    testData.validUser.email,
    testData.validUser.password
  );

  // Step 2 - Address
  await checkoutPage.proceedToAddress();

  await checkoutPage.enterAddress(
    testData.checkoutAddress.country,
    testData.checkoutAddress.postalCode,
    testData.checkoutAddress.houseNumber
  );

  // Step 3 - Payment
  await checkoutPage.proceedToPayment();

  await checkoutPage.selectPaymentMethod('cash-on-delivery');

  // Step 4 - Finish Order
  await checkoutPage.finishOrder();

  await expect(checkoutPage.finishButton).toBeVisible();
});