import React, { FunctionComponent } from "react";

import { useBasket } from "../../hooks/useBasket";
import { formatPrice } from "../../utils/formatPrice";

export const BasketTotal: FunctionComponent = () => {
  const { totalAfterSavings } = useBasket();

  return (
    <tr>
      <td>Total to pay</td>
      <td data-testid="total">{formatPrice(totalAfterSavings)}</td>
    </tr>
  );
};
