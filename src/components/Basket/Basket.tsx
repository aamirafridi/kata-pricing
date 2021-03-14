import React, { FunctionComponent } from "react";

import { usePricer } from "../../hooks/usePricer";
import { useBasket } from "../../hooks/useBasket";
import { formatPrice } from "../../utils/formatPrice";

export const Basket: FunctionComponent = () => {
  const { basketProducts, removeBasketProduct } = usePricer();
  const {
    subTotal,
    productSavings,
    totalSavings,
    totalAfterSavings,
  } = useBasket();

  return (
    <table>
      <caption>
        Basket ({basketProducts.length} item
        {basketProducts.length === 1 ? "" : "s"})
      </caption>
      <tbody>
        {basketProducts.map((product, index) => (
          <tr key={`${product.id}-${index}`}>
            <td data-testid={`basket-item-${product.id}`}>{product.name}</td>
            <td data-testid={`basket-price-${product.id}`}>
              {formatPrice(product.unitPrice)}
              <button
                title="remove from the basket"
                data-testid={`remove-product-${index}`}
                onClick={() => removeBasketProduct(product.id)}
              >
                X
              </button>
            </td>
          </tr>
        ))}
        {productSavings.length > 0 && (
          <>
            <tr>
              <td colSpan={2}>----------------</td>
            </tr>
            <tr>
              <td>Sub-total</td>
              <td data-testid="sub-total">{formatPrice(subTotal)}</td>
            </tr>
            <tr>
              <td colSpan={2}>Savings</td>
            </tr>
            {productSavings.map(({ label, price }, index) => (
              <tr key={label}>
                <td data-testid={`savings-product-${index}`}>{label}</td>
                <td data-testid={`savings-price-${index}`}>
                  -{formatPrice(price)}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>----------------</td>
            </tr>
            <tr>
              <td>Total savings</td>
              <td data-testid="total-savings">-{formatPrice(totalSavings)}</td>
            </tr>
          </>
        )}
        <tr>
          <td colSpan={2}>----------------</td>
        </tr>
        <tr>
          <td>Total to pay</td>
          <td data-testid="total">{formatPrice(totalAfterSavings)}</td>
        </tr>
      </tbody>
    </table>
  );
};
