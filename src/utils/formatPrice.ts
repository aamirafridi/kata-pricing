export const formatPrice = new Intl.NumberFormat("en-GB", {
  currency: "GBP",
  minimumFractionDigits: 2,
}).format;
