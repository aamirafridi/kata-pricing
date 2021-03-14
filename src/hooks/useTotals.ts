import { formatPrice } from "../utils/formatPrice";
import { usePricer } from "./usePricer";

export const useTotals = () => {
  const { basketProducts } = usePricer();

  const total = basketProducts.reduce((total, product) => {
    total += product.unitPrice;
    return total;
  }, 0);

  return {
    total: formatPrice(total),
    subTotal: formatPrice(total),
  };
};
