class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.signInButton = page.locator('[data-test="login-submit"]');
    this.loginErrorMessage = page.getByText('Invalid email or password');
  }

  async open() {
    await this.page.goto('/auth/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async expectInvalidLoginMessage() {
    await this.loginErrorMessage.waitFor({ state: 'visible' });
  }
}

module.exports = { LoginPage };