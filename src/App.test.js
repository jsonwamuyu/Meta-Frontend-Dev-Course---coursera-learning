import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render welcome message", () => {
  render(<App />);
  const welcomeMessage = screen.getByText(
    "Welcome to the Learning Management Platform",
  );
  expect(welcomeMessage).toBeInTheDocument();
});
