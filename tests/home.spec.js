class HomePage {
  constructor(page) {
    this.page = page;

    this.searchInput = page.locator('[data-test="search-query"]');
    this.searchButton = page.locator('[data-test="search-submit"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async openProduct(productName) {
    await this.page.getByText(productName, { exact: true }).first().click();
  }
}

module.exports = { HomePage };