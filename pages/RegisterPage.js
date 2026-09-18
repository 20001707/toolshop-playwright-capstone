class RegisterPage {
  constructor(page) {
    this.page = page;

    this.firstNameInput = page.locator('[data-test="first-name"]');
    this.lastNameInput = page.locator('[data-test="last-name"]');
    this.dateOfBirthInput = page.locator('[data-test="dob"]');
    this.countryDropdown = page.locator('[data-test="country"]');
    this.postalCodeInput = page.locator('[data-test="postal_code"]');
    this.houseNumberInput = page.locator('[data-test="house_number"]');
    this.streetInput = page.locator('[data-test="street"]');
    this.cityInput = page.locator('[data-test="city"]');
    this.stateInput = page.locator('[data-test="state"]');
    this.phoneInput = page.locator('[data-test="phone"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.registerButton = page.locator('[data-test="register-submit"]');
  }

  async open() {
    await this.page.goto('/auth/register');
  }

  async register(userData) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.dateOfBirthInput.fill(userData.dateOfBirth);

    await this.countryDropdown.selectOption(userData.country);

    await this.postalCodeInput.fill(userData.postalCode);
    await this.houseNumberInput.fill(userData.houseNumber);

    await this.streetInput.waitFor({ state: 'visible' });
    await this.cityInput.waitFor({ state: 'visible' });
    await this.stateInput.waitFor({ state: 'visible' });

    await this.phoneInput.fill(userData.phone);
    await this.emailInput.fill(userData.email);
    await this.passwordInput.fill(userData.password);

    await this.registerButton.click();
  }
}

module.exports = { RegisterPage };