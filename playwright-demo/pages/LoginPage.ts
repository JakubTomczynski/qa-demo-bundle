import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  selectors = {
    errorMessageContainer: () => this.page.locator('.error-message-container'),
    errorMessage: () => this.page.locator('[data-test="error"]'),
  };

  async login(username: string, password: string) {
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async assertErrorVisible() {
    await expect(this.selectors.errorMessage()).toBeVisible();
  }
}
