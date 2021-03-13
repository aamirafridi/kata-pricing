import React, { FunctionComponent } from "react";
import { products } from "../mockData";

export const Products: FunctionComponent = () => {
  return (
    <table>
      <caption>Products</caption>
      {products.map((product) => (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>
            <button>Add item</button>
          </td>
        </tr>
      ))}
    </table>
  );
};
