import React from "react";
import "./App.css";
import { Basket } from "./components/Basket/Basket";
import { Products } from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Products />
      <Basket />
    </div>
  );
}

export default App;
