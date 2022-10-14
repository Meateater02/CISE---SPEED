import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchArticle from "./MockReactSelect";

describe("Test react-select component", () => {
  test("should render without errors", () => {
    render(<SearchArticle />);
    const selectElement = screen.getByTestId("selectOptionTest");
    expect(selectElement).toBeTruthy();
    // screen.debug(screen.getByTestId("selectOptionTest"));
  });

  test("there is a placeholder in the dropdown list", async () => {
    const { getByText } = render(<SearchArticle />);
    const placeholder = getByText("Select...");
    expect(placeholder).toBeTruthy();
  });

  test("options listed are correct", async () => {
    const { getByText } = render(<SearchArticle />);
    const selectElement = screen.getByTestId("selectOptionTest");

    expect(selectElement).toBeDefined();

    //first option = TDD
    fireEvent.keyDown(selectElement.firstChild, { key: "ArrowDown" });
    await waitFor(() => {
      expect(getByText("TDD")).toBeInTheDocument();
    });
    fireEvent.click(getByText("TDD"));

    //second option = Mob Programming
    fireEvent.keyDown(selectElement.firstChild, { key: "ArrowDown" });
    await waitFor(() => {
      expect(getByText("Mob Programming")).toBeInTheDocument();
    });
    fireEvent.click(getByText("Mob Programming"));

    //third option = TFD
    fireEvent.keyDown(selectElement.firstChild, { key: "ArrowDown" });
    await waitFor(() => {
      expect(getByText("TFD")).toBeInTheDocument();
    });
    fireEvent.click(getByText("TFD"));

    //fourth option = BDD
    fireEvent.keyDown(selectElement.firstChild, { key: "ArrowDown" });
    await waitFor(() => {
      expect(getByText("BDD")).toBeInTheDocument();
    });
    fireEvent.click(getByText("BDD"));
  });
});
