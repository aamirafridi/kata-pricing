import React, { FunctionComponent } from "react";

import { useBasket } from "../../hooks/useBasket";
import { formatPrice } from "../../utils/formatPrice";
import { BasketDivider } from "./ BasketDivider";

export const BasketSavings: FunctionComponent = () => {
  const { subTotal, productSavings, totalSavings } = useBasket();

  if (productSavings.length === 0) {
    return null;
  }

  return (
    <>
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
          <td data-testid={`savings-price-${index}`}>-{formatPrice(price)}</td>
        </tr>
      ))}
      <BasketDivider />
      <tr>
        <td>Total savings</td>
        <td data-testid="total-savings">-{formatPrice(totalSavings)}</td>
      </tr>
      <BasketDivider />
    </>
  );
};
