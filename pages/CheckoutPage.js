class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Step 1 - Checkout Login
    this.proceedButton = page.locator('[data-test="proceed-1"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');

    // Step 2 - Address
    this.proceedAddressButton = page.locator(
      '[data-test="proceed-2"]'
    );

    this.countryDropdown = page.locator(
      '[data-test="country"]'
    );

    this.postalCodeInput = page.locator(
      '[data-test="postal_code"]'
    );

    this.houseNumberInput = page.locator(
      '[data-test="house_number"]'
    );

    // Auto-populated address fields
    this.streetInput = page.locator(
      '[data-test="street"]'
    );

    this.cityInput = page.locator(
      '[data-test="city"]'
    );

    this.stateInput = page.locator(
      '[data-test="state"]'
    );

    // Step 3 - Payment
    this.proceedPaymentButton = page.locator(
      '[data-test="proceed-3"]'
    );

    this.paymentMethodDropdown = page.locator(
      '[data-test="payment-method"]'
    );

    // Step 4 - Finish
    this.finishButton = page.locator(
      '[data-test="finish"]'
    );
  }

  // Step 1 - Checkout Login
  async proceedToCheckout() {
    await this.proceedButton.click();
  }

  async loginForCheckout(email, password) {
    await this.emailInput.waitFor({
      state: 'visible',
    });

    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  // Step 2 - Address
  async proceedToAddress() {
    await this.proceedAddressButton.waitFor({
      state: 'visible',
    });

    await this.proceedAddressButton.click();
  }

  async enterAddress(country, postalCode, houseNumber) {
    await this.countryDropdown.waitFor({
      state: 'visible',
    });

    await this.countryDropdown.selectOption({
      value: country,
    });

    await this.page.waitForTimeout(500);

    await this.postalCodeInput.fill(postalCode);

    await this.page.waitForTimeout(300);

    await this.houseNumberInput.fill(houseNumber);

    await this.page.waitForTimeout(300);

    // Click outside the fields to trigger validation
    await this.streetInput.click();

    // Allow the application to process the address
    await this.page.waitForTimeout(1000);
  }

  // Step 3 - Payment
  async proceedToPayment() {
    await this.proceedPaymentButton.waitFor({
      state: 'visible',
    });

    await this.proceedPaymentButton.click();
  }

  async selectPaymentMethod(paymentMethod) {
    await this.paymentMethodDropdown.waitFor({
      state: 'visible',
    });

    await this.paymentMethodDropdown.selectOption(
      paymentMethod
    );
  }

  // Step 4 - Finish Order
  async finishOrder() {
    await this.finishButton.waitFor({
      state: 'visible',
    });

    await this.finishButton.click();
  }
}

module.exports = { CheckoutPage };