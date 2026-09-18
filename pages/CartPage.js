class CartPage {
  constructor(page) {
    this.page = page;

    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.cartLink = page.locator('[data-test="nav-cart"]');
    this.cartQuantity = page.locator('[data-test="cart-quantity"]');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { CartPage };