import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Kata pricing app", () => {
  afterEach(jest.clearAllMocks);

  it("should render products", () => {
    render(<App />);

    expect(screen.getByText(/face masks/i)).toBeInTheDocument();
    expect(screen.getByText(/toilet paper/i)).toBeInTheDocument();
    expect(screen.getByText(/hand sanitizer/i)).toBeInTheDocument();
    expect(screen.getByText(/add item/i)).toHaveLength(3);
  });

  it("should able to add a product to basket", () => {
    render(<App />);
    fireEvent.click(screen.getByTestId(/product-1/));

    expect(screen.getByTestId("basket-item-1")).toContain("face masks");
    expect(screen.getByTestId("basket-price-1")).toContain("2.50");

    expect(screen.getByTestId("sub-total")).toContain("2.50");
    expect(screen.getByTestId("total")).toContain("2.50");
  });

  it("should able to add a product to basket and show savings", () => {
    render(<App />);
    fireEvent.click(screen.getByTestId(/product-1/));
    fireEvent.click(screen.getByTestId(/product-1/));

    expect(screen.getByTestId("sub-total")).toContain("5.00");
    expect(screen.getByTestId("savings-product-1")).toContain(
      "Face Masks 2 for £4"
    );
    expect(screen.getByTestId("savings-price-1")).toContain("-1.00");
    expect(screen.getByTestId("total-savings")).toContain("-1.00");

    expect(screen.getByTestId("total")).toContain("4");
  });
});
