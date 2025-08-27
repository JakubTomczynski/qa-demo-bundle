import { expect, Page } from '@playwright/test';
import { OrderSummaryData } from '../tests/interfaces/orderSummaryInterface';

export class CheckoutPage {
  constructor(private page: Page) {}

  selectors = {
    title: () => this.page.locator('[data-test="title"]'),
    infoContainer: () => this.page.locator('.checkout_info'),
    firstNameInput: () => this.page.locator('[data-test="firstName"]'),
    lastNameInput: () => this.page.locator('[data-test="lastName"]'),
    postalCodeInput: () => this.page.locator('[data-test="postalCode"]'),
    paymentInfoLabel: () => this.page.locator('[data-test="payment-info-label"]'),
    paymentInfoValue: () => this.page.locator('[data-test="payment-info-value"]'),
    shippingInfoLabel: () => this.page.locator('[data-test="shipping-info-label"]'),
    shippingInfoValue: () => this.page.locator('[data-test="shipping-info-value"]'),
    priceTotalLabel: () => this.page.locator('[data-test="total-info-label"]'),
    subtotalLabel: () => this.page.locator('[data-test="subtotal-label"]'),
    taxLabel: () => this.page.locator('[data-test="tax-label"]'),
    totalLabel: () => this.page.locator('[data-test="total-label"]'),
    container: () => this.page.locator('[data-test="checkout-complete-container"]'),
    ponyExpressImage: () => this.page.locator('[data-test="pony-express"]'),
    completeHeader: () => this.page.locator('[data-test="complete-header"]'),
    completeText: () => this.page.locator('[data-test="complete-text"]'),
    backToProductsButton: () => this.page.locator('[data-test="back-to-products"]'),
  };

  async verifyOrderSummary(data: OrderSummaryData) {
    await expect(this.selectors.paymentInfoLabel()).toHaveText('Payment Information:');
    await expect(this.selectors.paymentInfoValue()).toHaveText(data.paymentInfo);
    await expect(this.selectors.shippingInfoLabel()).toHaveText('Shipping Information:');
    await expect(this.selectors.shippingInfoValue()).toHaveText(data.shippingInfo);
    await expect(this.selectors.priceTotalLabel()).toHaveText('Price Total');
    await expect(this.selectors.subtotalLabel()).toHaveText(`Item total: ${data.itemTotal}`);
    await expect(this.selectors.taxLabel()).toHaveText(`Tax: ${data.tax}`);
    await expect(this.selectors.totalLabel()).toHaveText(`Total: ${data.total}`);
  }

  async fillUserData(userFirstName: string, userLastName: string, userPostalCode: string) {
    await this.selectors.firstNameInput().fill(userFirstName);
    await this.selectors.lastNameInput().fill(userLastName);
    await this.selectors.postalCodeInput().fill(userPostalCode);
  }

  async verifyCheckoutCompleteView() {
    await expect(this.selectors.container()).toBeVisible();
    await expect(this.selectors.completeHeader()).toHaveText('Thank you for your order!');
    await expect(this.selectors.completeText()).toHaveText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
    );
    await expect(this.selectors.backToProductsButton()).toBeEnabled();
  }
}
