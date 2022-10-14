import React from "react";
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

  test("navbar is present", () => {
    render(<App />);
    const navbarElement = screen.getByRole("list");
    // screen.debug(navbarElement);
    expect(navbarElement).toBeInTheDocument();
  });

  test("there are five options in the navbar", () => {
    render(<App />);
    const navbarElement = screen.getAllByRole("listitem");
    expect(navbarElement).toHaveLength(5);
  });

  test("navlinks are working", () => {
    render(<App />);
    // first option
    expect(screen.getByText("Search Articles").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
    // second option
    expect(screen.getByText("Submit an Article").closest("a")).toHaveAttribute(
      "href",
      "/SubmitArticle"
    );
    // third option
    expect(screen.getByText("Moderator").closest("a")).toHaveAttribute(
      "href",
      "/Moderator"
    );
    // fourth option
    expect(screen.getByText("Analyst").closest("a")).toHaveAttribute(
      "href",
      "/Analyst"
    );
    // fifth option
    expect(screen.getByText("Admin").closest("a")).toHaveAttribute(
      "href",
      "/Admin"
    );
  });
});
