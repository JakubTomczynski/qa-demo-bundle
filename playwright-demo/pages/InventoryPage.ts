import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  selectors = {
    productHeading: () => this.page.locator('[data-test="title"]'),
    addToCartBtn: () => this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
    cartIcon: () => this.page.locator('[data-test="shopping-cart-link"]'),
  };
  async productHeadingVisibility() {
    await expect(this.selectors.productHeading()).toBeVisible();
  }

  item(name: string) {
    return this.page.locator('.inventory_item').filter({ hasText: name }).locator('button:has-text("Add to cart")');
  }

  async addToCart(name: string) {
    await this.item(name).click();
  }

  async openCart() {
    await expect(this.selectors.cartIcon()).toBeVisible();
    await this.selectors.cartIcon().click();
  }
}
