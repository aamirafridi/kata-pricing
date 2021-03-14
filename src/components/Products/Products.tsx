import React, { FunctionComponent } from "react";
import { usePricer } from "../../hooks/usePricer";

export const Products: FunctionComponent = () => {
  const { products, addBasketProduct } = usePricer();

  return (
    <table data-testid="products-list">
      <caption>Products</caption>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>
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
        ))}
      </tbody>
    </table>
  );
};
