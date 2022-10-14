import { render, screen } from "@testing-library/react";
import SubmitForm from "../SubmitForm";
import userEvent from "@testing-library/user-event";

test("fill in the input box to check whether it functions well", () => {
  render(<SubmitForm />);
  userEvent.type(screen.getByPlaceholderText(/title/i), "Article Testing Name");
});

test("submit button is enabled to click", () => {
  render(<SubmitForm />);
  expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
});
