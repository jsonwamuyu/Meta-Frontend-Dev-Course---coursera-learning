// import React from "react";
// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("Render welcome message", () => {
//   render(<App />);
//   const welcomeMessage = screen.getByText(
//     "Welcome to the Learning Management Platform",
//   );
//   expect(welcomeMessage).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import FeedbackForm from "./components/coursera/advanced-react/testing/FeedbackForm";

test("Render User Feedback form.", () => {
  render(<FeedbackForm />);
  const feedbackForm = screen.getByText("User Feedback Form");
  expect(feedbackForm).toBeInTheDocument();
});
