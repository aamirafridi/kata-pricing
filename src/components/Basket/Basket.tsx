import React, { FunctionComponent } from "react";
import { formatPrice } from "../../utils";

export const Basket: FunctionComponent = () => {
  const basketProducts = [
    {
      id: 1,
      name: "face masks",
      unitPrice: 2.5,
    },
  ];
  return (
    <table>
      <caption>Basket</caption>
      <tbody>
        {basketProducts.map((product) => (
          <tr key={product.id}>
            <td data-testid={`basket-item-${product.id}`}>{product.name}</td>
            <td data-testid={`basket-price-${product.id}`}>
              {formatPrice(product.unitPrice)}
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={2}>----------------</td>
        </tr>
        <tr>
          <td>Sub-total</td>
          <td data-testid="sub-total">
            {formatPrice(basketProducts[0].unitPrice)}
          </td>
        </tr>
        <tr>
          <td colSpan={2}>----------------</td>
        </tr>
        <tr>
          <td>Total to pay</td>
          <td data-testid="total">
            {formatPrice(basketProducts[0].unitPrice)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
