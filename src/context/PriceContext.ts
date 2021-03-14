/* istanbul ignore file */

import { createContext } from "react";
import { Product } from "../mockData";

export const PricerContext = createContext<Context>({
  products: [],
  basketProducts: [],
  addBasketProduct: () => {},
  removeBasketProduct: () => {},
});

type Context = {
  products: Array<Product>;
  basketProducts: Array<Product>;
  addBasketProduct: (productId: Product["id"]) => void;
  removeBasketProduct: (productId: Product["id"]) => void;
};
