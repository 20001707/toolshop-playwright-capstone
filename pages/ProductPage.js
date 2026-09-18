class ProductPage {
  constructor(page) {
    this.page = page;

    this.addToCartButton = page.locator('#btn-add-to-cart');
    this.successToast = page.getByText('Product added to shopping cart.');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async expectProductAddedToCart() {
    await this.successToast.waitFor({ state: 'visible' });
  }
}

module.exports = { ProductPage };