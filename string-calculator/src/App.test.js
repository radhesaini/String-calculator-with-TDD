import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("check is there textBox exist", () => {
  render(<App />);
  const inputTag = screen.getByTestId("user-input");
  fireEvent.change(inputTag, { target: { value: "1,2,3" } });
  expect(inputTag).toBeTruthy();
});

test("check is there button exist", () => {
  render(<App />);
  const resultBtn = screen.getByTestId("calculator-btn");
  expect(resultBtn).toBeTruthy();
});

describe("Test: String Calculator", () => {
  test("check is negative add on button click exist", () => {
    render(<App />);
    const inputTag = screen.getByTestId("user-input");
    fireEvent.change(inputTag, { target: { value: "//;\n-1;2,-9" } });
    const resultBtn = screen.getByTestId("calculator-btn");
    fireEvent.click(resultBtn);
    const results = screen.getByText(
      "Result = negative numbers not allowed -1"
    );
    const results2 = screen.getByText(
      "Result = negative numbers not allowed -9"
    );
    expect(results).toBeTruthy();
    expect(results2).toBeTruthy();
  });
  test("check is positive add 3", () => {
    render(<App />);
    const inputTag = screen.getByTestId("user-input");
    fireEvent.change(inputTag, { target: { value: "//;\n1;2" } });
    const resultBtn = screen.getByTestId("calculator-btn");
    fireEvent.click(resultBtn);
    const results = screen.getByText("Result = 3");
    expect(results).toBeTruthy();
  });
  test("check is positive add 0", () => {
    render(<App />);
    const inputTag = screen.getByTestId("user-input");
    fireEvent.change(inputTag, { target: { value: "" } });
    const resultBtn = screen.getByTestId("calculator-btn");
    fireEvent.click(resultBtn);
    const results = screen.getByText("Result = 0");
    expect(results).toBeTruthy();
  });
});
