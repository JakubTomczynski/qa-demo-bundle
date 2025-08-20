import { expect } from '@playwright/test';
import { test } from '../../fixtures/classFixture';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});
test.describe('@smoke Login', () => {
  test('Valid user can login', async ({ inventoryPage, loginPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.productHeadingVisibility();
  });
});

test.describe('@smoke login 2', () => {
  test.use({ storageState: undefined });
  test('Locked out user sees error', async ({ loginPage }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.assertErrorVisible();
  });
});
