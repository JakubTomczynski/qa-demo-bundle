import { Page, test as base, request } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend<{
  page: Page;
  cartPage: CartPage;
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
}>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
