import { test } from '../../fixtures/classFixture';
import { sauceLabsBoltShirt } from '../interfaces/orderSummaryInterface';
test.describe.only('@visual base page', () => {
  test('Landing page baseline', async ({ page, loginPage, inventoryPage }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.takeInventoryScreenshot('Sauce Labs Bolt T-Shirt');
  });
});
