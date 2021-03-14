export const products = [
  {
    id: 1 as const,
    name: "Face Masks",
    unitPrice: 2.5,
    priceLabel: "each",
  },
  {
    id: 2 as const,
    name: "Toilet Paper",
    unitPrice: 0.65,
    priceLabel: "per roll",
  },
  {
    id: 3 as const,
    name: "Hand Sanitizer",
    unitPrice: 3.5,
    priceLabel: "175ml @ £19.99 per litre",
  },
];

export type Product = typeof products[number];
export type Discount = Partial<
  Record<
    Product["id"],
    {
      label: string;
      units: number;
      price: number;
    }
  >
>;

export const discounts: Discount = {
  1: {
    label: "Two Face Masks for £4",
    units: 2,
    price: 4,
  },
  2: {
    label: "Six rolls of toilet paper for the price of five",
    units: 6,
    price: 3.25,
  },
};
