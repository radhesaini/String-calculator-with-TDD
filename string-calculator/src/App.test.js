import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("check is there textBox exist", () => {
  render(<App />);
  //catch input tag
  const inputTag = screen.getByTestId("user-input");
  //check it's exist or not
  expect(inputTag).toBeTruthy();
});

test("check is there button exist", () => {
  render(<App />);
  //catch calculator button
  const resultBtn = screen.getByTestId("calculator-btn");
  //verify btn
  expect(resultBtn).toBeTruthy();
});

describe("Test: String Calculator", () => {
  test("check is negative add on button click exist", () => {
    render(<App />);
    // get input tag
    const inputTag = screen.getByTestId("user-input");
    // change the value of input
    fireEvent.change(inputTag, { target: { value: "//;\n-1;2,-9" } });
    //catch calculator button
    const resultBtn = screen.getByTestId("calculator-btn");
    //hit click event on btn
    fireEvent.click(resultBtn);
    //get result div
    const results = screen.getByText(
      "Result = negative numbers not allowed -1"
    );
    const results2 = screen.getByText(
      "Result = negative numbers not allowed -9"
    );
    //verify result 1st
    expect(results).toBeTruthy();
    //verify result 2nd
    expect(results2).toBeTruthy();
  });
  test("check is positive add 3", () => {
    render(<App />);
    // get input tag
    const inputTag = screen.getByTestId("user-input");
    //catch calculator button
    fireEvent.change(inputTag, { target: { value: "//;\n1;2" } });
    //catch calculator button
    const resultBtn = screen.getByTestId("calculator-btn");
    //hit click event on btn
    fireEvent.click(resultBtn);
    //get result div
    const results = screen.getByText("Result = 3");
    //verify result
    expect(results).toBeTruthy();
  });
  test("check is positive add 0", () => {
    render(<App />);
    // get input tag
    const inputTag = screen.getByTestId("user-input");
    // change the value of input
    fireEvent.change(inputTag, { target: { value: "" } });
    //catch calculator button
    const resultBtn = screen.getByTestId("calculator-btn");
    //hit click event on btn
    fireEvent.click(resultBtn);
    //get result tag
    const results = screen.getByText("Result = 0");
    //verify result
    expect(results).toBeTruthy();
  });
});
