import { expect } from '@playwright/test';
import { test } from '../../fixtures/classFixture';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test.describe('@regression Cart', () => {
  test('Add item to cart and proceed to checkout', async ({ loginPage, cartPage, inventoryPage, page }) => {
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.productHeadingVisibility();
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();
    await cartPage.assertItemVisible('Sauce Labs Backpack');
  });
});
