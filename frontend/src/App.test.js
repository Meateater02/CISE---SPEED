import { render, screen } from "@testing-library/react";
// import App from "./App";
import userEvent from "@testing-library/user-event";
const { default: SubmitForm } = require("./pages/SubmitForm");

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("fill in the input box to check whether it functions well", () => {
  render(<SubmitForm />);
  userEvent.type(screen.getByPlaceholderText(/title/i), "Article Testing Name");
});

test("submit button is enabled to click", () => {
  render(<SubmitForm />);
  expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
});
