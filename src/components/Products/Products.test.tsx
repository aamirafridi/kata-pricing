import { render, screen } from "@testing-library/react";
import React from "react";
import { Products } from "./Products";

// if data comes from an API, we will mock the source here

describe("Products", () => {
  afterEach(jest.clearAllMocks);

  it("should render products", () => {
    render(<Products />);
    expect(screen.getByText(/face masks/i)).toBeInTheDocument();
    expect(screen.getByText(/toilet paper/i)).toBeInTheDocument();
    expect(screen.getByText(/hand sanitizer/i)).toBeInTheDocument();
    expect(screen.getAllByText(/add item/i)).toHaveLength(3);
  });
});
