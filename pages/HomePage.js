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
    const productLink = this.page
      .locator('a[href*="/product/"]')
      .filter({ hasText: productName })
      .first();

    await productLink.click();
  }
}

module.exports = { HomePage };