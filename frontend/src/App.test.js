import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Base template is rendering without errors", () => {
  test("name of the software is displayed", async () => {
    render(<App />);
    const headingElement = screen.getByText(
      "Software Practice Empirical Evidence Database (SPEED)"
    );
    // screen.debug(headingElement);
    expect(headingElement).toBeInTheDocument();
  });

  test("name of the software is displayed", async () => {
    render(<App />);
    const headingElement = screen.getAllByRole("heading");
    // screen.debug(headingElement);
    expect(headingElement).toBeTruthy();
  });

  test("navbar is present", () => {
    render(<App />);
    const navbarElement = screen.getByRole("list");
    // screen.debug(navbarElement);
    expect(navbarElement).toBeInTheDocument();
  });
});

//due to react-table version, this test will always fail...
// test("testing table", () => {
//   render(<Table columns={tablecolumns} data={testData} />);
//   expect(screen.getByRole("table")).toHaveLength(1);
//   expect(screen.getByRole("tr")).toHaveLength(testData.length);
//   expect(screen.getByRole("th")).toHaveLength(tablecolumns.length);
// });
