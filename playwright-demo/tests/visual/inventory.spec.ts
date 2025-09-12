import { test } from '../../fixtures/classFixture';
import { sauceLabsBoltShirt, sauceLabsBoltShirtDetails } from '../interfaces/orderSummaryInterface';
test.describe('@visual base page', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await loginPage.login('standard_user', 'secret_sauce');
  });
  test('Landing page baseline', async ({ inventoryPage }) => {
    await inventoryPage.takeInventoryScreenshot(sauceLabsBoltShirtDetails.itemName);
  });
});
