import { FunctionComponent, useCallback, useState } from "react";

import { Product, products } from "../mockData";
import { PricerContext } from "./PriceContext";

export const PricerProvider: FunctionComponent = ({ children }) => {
  const [basketProductIds, setBasketProductIds] = useState<Product["id"][]>([]);

  const addBasketProduct = useCallback((productId: Product["id"]) => {
    setBasketProductIds((prevProductIds) =>
      [...prevProductIds, productId].sort()
    );
  }, []);

  const removeBasketProduct = useCallback(
    (productId: Product["id"]) => {
      const copyProductIds = [...basketProductIds];
      copyProductIds.splice(
        copyProductIds.findIndex((id) => id === productId),
        1
      );
      setBasketProductIds(copyProductIds);
    },
    [basketProductIds]
  );

  // no need to use useMemo here because adding or removing products
  // will always mutate basketProductIds
  const basketProducts = basketProductIds.reduce(
    (result: Array<Product>, productId) => {
      const foundProduct = products.find(
        ({ id }) => id === productId
      ) as Product;
      result.push(foundProduct);
      return result;
    },
    []
  );

  return (
    <PricerContext.Provider
      value={{
        products,
        basketProducts,
        addBasketProduct,
        removeBasketProduct,
      }}
    >
      {children}
    </PricerContext.Provider>
  );
};
