import React, { FunctionComponent } from "react";

import { usePricer } from "../../hooks/usePricer";
import { formatPrice } from "../../utils/formatPrice";

export const BasketItems: FunctionComponent = () => {
  const { basketProducts, removeBasketProduct } = usePricer();

  return (
    <>
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
    </>
  );
};
