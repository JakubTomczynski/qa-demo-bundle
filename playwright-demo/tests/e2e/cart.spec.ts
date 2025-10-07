import { test } from '../../fixtures/classFixture';
import { sauceLabsBackpack } from '../interfaces/orderSummaryInterface';

test.describe('@regression Cart', () => {
  test('Add item to cart, proceed and checkout', async ({ basePage, checkoutPage, loginPage, cartPage, inventoryPage, page }) => {
    await test.step('Open app', async () => {
      await page.goto('/');
    });

    await test.step('Login as standard user', async () => {
      await loginPage.login('standard_user', 'secret_sauce');
      await inventoryPage.productHeadingVisibility();
    });

    await test.step('Add product to cart', async () => {
      await inventoryPage.addToCart('Sauce Labs Backpack');
      await inventoryPage.openCart();
      await cartPage.assertItemVisible('Sauce Labs Backpack');
    });

    await test.step('Start checkout', async () => {
      await cartPage.clickCheckoutButton();
      await checkoutPage.fillUserData('Jakub', 'Tometti', '27-200');
      await basePage.selectors.continueButton().click();
    });

    await test.step('Verify order summary', async () => {
      await checkoutPage.verifyOrderSummary(sauceLabsBackpack);
    });

    await test.step('Finish and confirm', async () => {
      await basePage.selectors.finishButton().click();
      await checkoutPage.verifyCheckoutCompleteView();
    });
  });
});
