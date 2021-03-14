import React from "react";
import "./App.css";
import { Basket } from "./components/Basket/Basket";
import { Products } from "./components/Products/Products";
import { PricerProvider } from "./context/PriceProvider";

function App() {
  return (
    <PricerProvider>
      <Products />
      <Basket />
    </PricerProvider>
  );
}

export default App;
