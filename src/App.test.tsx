import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { server } from "./mocks/server.js";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/github search/i);
  expect(linkElement).toBeInTheDocument();
});

test("has an input to search github users", () => {
  render(<App />);
  const inputElement = getInputElement();
  expect(inputElement).toBeInTheDocument();
});

test("enables the button once the input has value", () => {
  render(<App />);
  fillInputElement("rogersanbr");
  const buttonElement = getButtonElement();
  expect(buttonElement).toBeEnabled();
});

test("gets the user from github api", async () => {
  render(<App />);
  fillInputElement("rogersanbr");
  const buttonElement = getButtonElement();
  fireEvent.click(buttonElement);
  await waitFor(() => {
    const result = screen.getByText(/defunkt/i);
    expect(result).toBeInTheDocument();
  });
});

//  Test Helpers

const getInputElement = () => screen.getByPlaceholderText(/github account/i);
const fillInputElement = (value: string) =>
  fireEvent.change(getInputElement(), { target: { value: value } });
const getButtonElement = () => screen.getByText("Search");
