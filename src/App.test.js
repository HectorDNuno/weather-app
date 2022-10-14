import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("render Search component", () => {
  const { getByText } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const childElement = getByText("Search for City");
  expect(childElement).toBeInTheDocument();
});

test("render CurrentWeather component", () => {
  const { getByTestId } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const childElement = getByTestId("currentWeather");
  expect(childElement).toBeInTheDocument();
});
