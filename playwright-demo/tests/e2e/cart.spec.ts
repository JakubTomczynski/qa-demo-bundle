import { test } from '../../fixtures/classFixture';
import { sauceLabsBackpack } from '../interfaces/orderSummaryInterface';
test.describe('@regression Cart', () => {
  test('Add item to cart, proceed and checkout', async ({ basePage, checkoutPage, loginPage, cartPage, inventoryPage, page }) => {
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.productHeadingVisibility();
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();
    await cartPage.assertItemVisible('Sauce Labs Backpack');
    await cartPage.clickCheckoutButton();
    await checkoutPage.fillUserData('Jakub', 'Tometti', '27-200');
    await basePage.selectors.continueButton().click();
    await checkoutPage.verifyOrderSummary(sauceLabsBackpack);
    await basePage.selectors.finishButton().click();
    await checkoutPage.verifyCheckoutCompleteView();
  });
});
