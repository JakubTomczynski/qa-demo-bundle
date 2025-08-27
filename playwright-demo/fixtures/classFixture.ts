import { Page, test as base, request } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { BasePage } from '../pages/BasePage';

export const test = base.extend<{
  page: Page;
  cartPage: CartPage;
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
  basePage: BasePage;
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
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
});
