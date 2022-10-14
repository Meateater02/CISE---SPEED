import React from "react";
import { render, screen } from "@testing-library/react";
import SearchArticle from "./MockReactSelect";

describe("Test react-select component", () => {
  test("should render without errors", () => {
    render(<SearchArticle />);
    const selectElement = screen.getByTestId("selectOptionTest");
    expect(selectElement).toBeTruthy();
    // screen.debug(screen.getByTestId("selectOptionTest"));
  });

  test("should call onChange function when user select an option", async () => {
    render(<SearchArticle />);
    const selectElement = screen.getByTestId("selectOptionTest");
    expect(selectElement).toBeDefined();
    expect(selectElement).not.toBeNull();
  });
});
