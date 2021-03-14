import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/renderWithProviders";

// if data comes from an API, we will mock the source here

describe("Kata pricing app", () => {
  afterEach(jest.clearAllMocks);

  it("should able to add a product to basket", () => {
    renderWithProviders(<App />);
    fireEvent.click(screen.getByTestId(/add-product-1/));

    expect(screen.getByTestId("basket-item-1")).toHaveTextContent(
      /face masks/i
    );
    expect(screen.getByTestId("basket-price-1")).toHaveTextContent("2.50");

    expect(screen.getByTestId("sub-total")).toHaveTextContent("2.50");
    expect(screen.getByTestId("total")).toHaveTextContent("2.50");
  });

  it("should able to add a product to basket and show savings", () => {
    renderWithProviders(<App />);
    fireEvent.click(screen.getByTestId(/product-1/));
    fireEvent.click(screen.getByTestId(/product-1/));

    expect(screen.getByTestId("sub-total")).toHaveTextContent("5.00");
    expect(screen.getByTestId("savings-product-1")).toHaveTextContent(
      "Face Masks 2 for £4"
    );
    expect(screen.getByTestId("savings-price-1")).toHaveTextContent("-1.00");
    expect(screen.getByTestId("total-savings")).toHaveTextContent("-1.00");

    expect(screen.getByTestId("total")).toHaveTextContent("4");
  });
});
