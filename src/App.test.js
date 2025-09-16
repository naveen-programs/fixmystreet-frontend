import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Navbar", () => {
  render(<App />);
  const navElement = screen.getByText(/Home/i); // ✅ check for Home link
  expect(navElement).toBeInTheDocument();
});
