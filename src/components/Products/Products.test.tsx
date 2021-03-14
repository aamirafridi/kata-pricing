import { screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../utils/renderWithProviders";
import { Products } from "./Products";

// if data comes from an API, we will mock the source here

describe("Products", () => {
  afterEach(jest.clearAllMocks);

  it("should render products", () => {
    renderWithProviders(<Products />);
    expect(screen.getByText("Face Masks")).toBeInTheDocument();
    expect(screen.getByText("Toilet Paper")).toBeInTheDocument();
    expect(screen.getByText(/hand sanitizer/i)).toBeInTheDocument();
    expect(screen.getAllByText(/add item/i)).toHaveLength(3);
  });
});
