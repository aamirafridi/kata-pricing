/* istanbul ignore file */

import { render } from "@testing-library/react";
import React from "react";

import { PricerProvider } from "../context/PriceProvider";

export const renderWithProviders = (Component: React.ReactElement) =>
  render(<PricerProvider>{Component}</PricerProvider>);
