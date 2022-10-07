import { render, screen } from "@testing-library/react";
// import App from "./App";
import Table from "./components/table";
import tablecolumns from "./components/admincolumn";
import { testData } from "./mockData/testData";

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

test("testing table", () => {
  render(<Table columns={tablecolumns} data={testData} />);
  expect(screen.getByRole("table")).toHaveLength(1);
  expect(screen.getByRole("tr")).toHaveLength(testData.length);
  expect(screen.getByRole("th")).toHaveLength(tablecolumns.length);
});
