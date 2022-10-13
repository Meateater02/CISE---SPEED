import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElement,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SubmitForm from "../SubmitForm";
import SearchArticle from "../SearchArticle";

test("fill in the input box to check whether it functions well", () => {
  render(<SubmitForm />);
  userEvent.type(screen.getByPlaceholderText(/title/i), "Article Testing Name");
});

test("submit button is enabled to click", () => {
  render(<SubmitForm />);
  expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
});

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

    // fireEvent.keyDown(selectElement.firstChild, { key: "ArrowDown" });
    // await waitForElement(() => screen.getByText("TDD"));
  });
});
