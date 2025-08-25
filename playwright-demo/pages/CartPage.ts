import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  selectors = {
    cartItem: () => this.page.locator('.cart_item'),
    checkoutButton: () => this.page.getByRole('button', { name: 'checkout' }),
  };

  async assertItemVisible(name: string) {
    await expect(this.selectors.cartItem().getByText(name)).toBeVisible();
  }

  async clickCheckoutButton() {
    await this.selectors.checkoutButton().click();
  }
}
