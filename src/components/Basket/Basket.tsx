import React, { FunctionComponent } from "react";

import { BasketItems } from "./BasketItems";
import { BasketSavings } from "./BasketSavings";
import { BasketTotal } from "./BasketTotal";

export const Basket: FunctionComponent = () => {
  return (
    <table>
      <caption>Basket</caption>
      <tbody>
        <BasketItems />
        <BasketSavings />
        <BasketTotal />
      </tbody>
    </table>
  );
};
