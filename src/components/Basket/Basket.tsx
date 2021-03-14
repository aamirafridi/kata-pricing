import React, { FunctionComponent } from "react";
import { usePricer } from "../../hooks/usePricer";
import { useTotals } from "../../hooks/useTotals";
import { formatPrice } from "../../utils/formatPrice";

export const Basket: FunctionComponent = () => {
  const { basketProducts, removeBasketProduct } = usePricer();
  const { subTotal, total } = useTotals();

  return (
    <table>
      <caption>
        Basket ({basketProducts.length} item
        {basketProducts.length === 1 ? "" : "s"})
      </caption>
      <tbody>
        {basketProducts.map((product, index) => (
          <tr key={`${product.id}-${index}`}>
            <td data-testid={`basket-item-${product.id}`}>
              {index + 1} : {product.name}
            </td>
            <td data-testid={`basket-price-${product.id}`}>
              {formatPrice(product.unitPrice)}
              <button
                title="remove from the basket"
                onClick={() => removeBasketProduct(product.id)}
              >
                X
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={2}>----------------</td>
        </tr>
        <tr>
          <td>Sub-total</td>
          <td data-testid="sub-total">{subTotal}</td>
        </tr>
        <tr>
          <td colSpan={2}>----------------</td>
        </tr>
        <tr>
          <td>Total to pay</td>
          <td data-testid="total">{total}</td>
        </tr>
      </tbody>
    </table>
  );
};
