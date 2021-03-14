import { useContext } from "react";

import { PricerContext } from "../context/PriceContext";

export const usePricer = () => useContext(PricerContext);
