class HomePage {
  constructor(page) {
    this.page = page;

    this.searchInput = page.locator('[data-test="search-query"]');
    this.searchButton = page.locator('[data-test="search-submit"]');
    this.sortDropdown = page.locator('[data-test="sort"]');

    this.categoriesMenu = page.locator('[data-test="nav-categories"]');
    this.handToolsCategory = page.locator('[data-test="nav-hand-tools"]');

    this.page2Button = page.getByRole('button', { name: 'Page-2' });
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
      .filter({ hasText: productName }) //this will filter the locator to only include links that contain the product name
      .first();//this will select the first link that matches the filter

    await productLink.waitFor({ state: 'visible' });
    await productLink.click();
  }

  async sortProducts(option) {
    await this.sortDropdown.selectOption({ label: option });
  }

  async selectHandToolsCategory() {
    await this.categoriesMenu.click();
    await this.handToolsCategory.click();
  }

  async goToPageTwo() {
    await this.page2Button.click();
  }
}

module.exports = { HomePage };