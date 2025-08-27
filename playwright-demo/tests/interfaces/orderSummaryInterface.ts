export interface OrderSummaryData {
  paymentInfo: string;
  shippingInfo: string;
  itemTotal: string;
  tax: string;
  total: string;
}

export const sauceLabsBackpack: OrderSummaryData = {
  paymentInfo: 'SauceCard #31337',
  shippingInfo: 'Free Pony Express Delivery!',
  itemTotal: '$29.99',
  tax: '$2.40',
  total: '$32.39',
};
