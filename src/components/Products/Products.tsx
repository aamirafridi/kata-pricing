import React, { FunctionComponent } from "react";

import { usePricer } from "../../hooks/usePricer";
import { discounts } from "../../mockData";
import { formatPrice } from "../../utils/formatPrice";

export const Products: FunctionComponent = () => {
  const { products, addBasketProduct } = usePricer();

  return (
    <table data-testid="products-list">
      <caption>Products</caption>
      <tbody>
        {products.map((product) => {
          const discount = discounts[product.id];
          return (
            <tr key={product.id}>
              <td>
                <strong>{product.name}</strong>
                {discount && <div>{discount.label}</div>}
              </td>
              <td>
                {formatPrice(product.unitPrice)} ({product.priceLabel})
                <button
                  data-testid={`add-product-${product.id}`}
                  onClick={() => {
                    addBasketProduct(product.id);
                  }}
                >
                  Add item
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
