import { Page, expect, Locator } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  selectors = {
    productHeading: () => this.page.locator('[data-test="title"]'),
    addBackPackToCartBtn: () => this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
    cartIcon: () => this.page.locator('[data-test="shopping-cart-link"]'),
    itemPrice: () => this.page.locator('[data-test="inventory-item-price"]'),
    inventoryItem: () => this.page.locator('[data-test="inventory-item"]'),
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
  getPriceByProductName(name: string): Locator {
    return this.selectors.inventoryItem().filter({ hasText: name }).locator('[data-test="inventory-item-price"]');
  }

  async takeInventoryScreenshot(productName: string) {
    const specificPriceLocator = this.getPriceByProductName(productName);
    await expect(this.page).toHaveScreenshot(`inventory-${productName}.png`, {
      mask: [specificPriceLocator],
      maskColor: '#4D9A94',
    });
  }
}
