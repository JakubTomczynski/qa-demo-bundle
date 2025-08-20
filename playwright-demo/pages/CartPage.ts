import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  selectors = {
    cartItem: () => this.page.locator('.cart_item'),
    checkoutBtn: () => this.page.getByRole('button', { name: 'checkout' }),
  };

  async assertItemVisible(name: string) {
    await expect(this.selectors.cartItem().getByText(name)).toBeVisible();
  }

  async checkoutBtnClick() {
    await this.selectors.checkoutBtn().click();
  }
}
