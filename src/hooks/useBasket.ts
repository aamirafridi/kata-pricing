import { discounts, Product, products } from "../mockData";
import { usePricer } from "./usePricer";

export const useBasket = () => {
  const { basketProducts } = usePricer();

  const total = basketProducts.reduce((total, product) => {
    total += product.unitPrice;
    return total;
  }, 0);

  const productsWithQuantity = basketProducts.reduce(
    (productWithQuantity: ProductsWithQuantity, { id }) => {
      productWithQuantity[id] = (productWithQuantity[id] || 0) + 1;
      return productWithQuantity;
    },
    {}
  );

  const productSavings = Object.entries(productsWithQuantity).reduce(
    (savings: Savings, pair) => {
      const productId = Number(pair[0]) as Product["id"];
      const quantity = pair[1] as number;
      const product = products.find(({ id }) => id === productId) as Product;
      const discount = discounts[productId];

      if (discount && quantity >= discount.units) {
        const remainderQuantity = quantity % discount.units;
        const quantityThatCanBeDiscounted = quantity - remainderQuantity;
        const discountedPrice =
          (quantityThatCanBeDiscounted / discount.units) * discount.price;
        const discountedTotalPrice =
          remainderQuantity * product.unitPrice + discountedPrice;
        const totalSaving = product.unitPrice * quantity - discountedTotalPrice;
        savings.push({
          label: discount.label,
          price: totalSaving,
        });
      }

      return savings;
    },
    []
  );

  const totalSavings = productSavings.reduce(
    (total: number, { price }) => total + price,
    0
  );

  return {
    subTotal: total,
    productSavings,
    totalSavings,
    totalAfterSavings: total - totalSavings,
  };
};

type ProductsWithQuantity = Partial<Record<Product["id"], number>>;
type Savings = Array<{
  label: string;
  price: number;
}>;
