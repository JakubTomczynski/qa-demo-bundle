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

export const sauceLabsBoltShirt: OrderSummaryData = {
  paymentInfo: 'SauceCard #31337',
  shippingInfo: 'Free Pony Express Delivery!',
  itemTotal: '$17.27',
  tax: '$1.28',
  total: '$15.99',
};

export interface OrderDetails {
  itemName: string;
}

export const sauceLabsBoltShirtDetails: OrderDetails = {
  itemName: 'Sauce Labs Bolt T-Shirt',
};
