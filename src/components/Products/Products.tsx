import React, { FunctionComponent } from "react";
import { products } from "../../mockData";

export const Products: FunctionComponent = () => {
  return (
    <table data-testid="products-list">
      <caption>Products</caption>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>
              <button data-testid={`add-product-${product.id}`}>
                Add item
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
