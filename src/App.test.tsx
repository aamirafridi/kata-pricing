import React from "react";
import { fireEvent, screen } from "@testing-library/react";
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

    expect(screen.getByTestId("total")).toHaveTextContent("2.50");
  });

  it("should able to add a product to basket and show savings", () => {
    renderWithProviders(<App />);
    fireEvent.click(screen.getByTestId("add-product-1"));
    fireEvent.click(screen.getByTestId("add-product-1"));

    expect(screen.getByTestId("sub-total")).toHaveTextContent("5.00");
    expect(screen.getByTestId("savings-product-0")).toHaveTextContent(
      "Two Face Masks for £4"
    );
    expect(screen.getByTestId("savings-price-0")).toHaveTextContent("-1.00");
    expect(screen.getByTestId("total-savings")).toHaveTextContent("-1.00");

    expect(screen.getByTestId("total")).toHaveTextContent("4");

    // remove product
    fireEvent.click(screen.getByTestId("remove-product-0"));
    expect(screen.queryByTestId("sub-total")).not.toBeInTheDocument();
    expect(screen.getByTestId("total")).toHaveTextContent("2.50");

    // saving removed
    expect(screen.queryByTestId("savings-price-0")).not.toBeInTheDocument();
    expect(screen.queryByTestId("total-savings")).not.toBeInTheDocument();

    // remove all products
    fireEvent.click(screen.getByTestId("remove-product-0"));
    expect(screen.getByTestId("total")).toHaveTextContent("0.00");
  });

  it("should not add discount for 'Hand Sanitizer'", () => {
    renderWithProviders(<App />);
    fireEvent.click(screen.getByTestId("add-product-3"));

    expect(screen.getByTestId("total")).toHaveTextContent("3.50");

    fireEvent.click(screen.getByTestId("add-product-3"));
    fireEvent.click(screen.getByTestId("add-product-3"));
    fireEvent.click(screen.getByTestId("add-product-3"));

    expect(screen.getByTestId("total")).toHaveTextContent("14.00");
  });
});
