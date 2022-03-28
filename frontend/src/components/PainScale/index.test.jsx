import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import PainScale from "./index";
import * as api from "services/api";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  jest.resetModules();
  jest.spyOn(console, "error");
  jest.spyOn(console, "warn");
  jest.spyOn(console, "log");
});

afterEach(() => {
  expect(console.warn).not.toBeCalled();
  expect(console.log).not.toBeCalled();
  expect(console.error).not.toBeCalled();
});

it("renders the explanation text", () => {
  render(<PainScale title="Average for the last 48 hours" />);
  expect(screen.getByText("Average for the last 48 hours")).toBeTruthy();
});

it("renders the best case text", () => {
  render(
    <PainScale
      title="Best for the last 48 hours"
      bestCaseText="Worst Pain Imaginable"
    />
  );
  expect(screen.getByText("Worst Pain Imaginable")).toBeTruthy();
});

it("renders the worst case text", () => {
  render(
    <PainScale title="Best for the last 48 hours" worstCaseText="No Pain" />
  );
  expect(screen.getByText("No Pain")).toBeTruthy();
});

it("render the scale buttons", () => {
  render(
    <PainScale
      title="Best for the last 48 hours"
      bestCaseText="Worst Pain Imaginable"
      worstCaseText="No Pain"
    />
  );

  expect(screen.getByTestId("1")).toBeTruthy();
  expect(screen.getByTestId("2")).toBeTruthy();
  expect(screen.getByTestId("3")).toBeTruthy();
  expect(screen.getByTestId("4")).toBeTruthy();
  expect(screen.getByTestId("5")).toBeTruthy();
  expect(screen.getByTestId("6")).toBeTruthy();
  expect(screen.getByTestId("7")).toBeTruthy();
  expect(screen.getByTestId("8")).toBeTruthy();
  expect(screen.getByTestId("9")).toBeTruthy();
  expect(screen.getByTestId("10")).toBeTruthy();
});

it("calls the onChange method with the right value", () => {
  const mockFunction = jest.fn();
  render(
    <PainScale
      title="Best for the last 48 hours"
      bestCaseText="Worst Pain Imaginable"
      worstCaseText="No Pain"
      onChange={mockFunction}
    />
  );

  userEvent.click(screen.getByTestId("7"));

  expect(mockFunction).toBeCalledWith("7");
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

6// TODO: These tests that rely on MUI classes must be refactored!

it("changes the styles of the selected button", async () => {
  const mockFunction = jest.fn();
  render(
    <PainScale
      title="Best for the last 48 hours"
      bestCaseText="Worst Pain Imaginable"
      worstCaseText="No Pain"
      onChange={mockFunction}
    />
  );

  const twoScore = screen.getByTestId("2");
  userEvent.click(twoScore);

  await waitFor(() => {
    expect(twoScore).toHaveClass("MuiButton-contained");
  });
});

it("does not check multiple buttons at the same time", async () => {
  const mockFunction = jest.fn();
  render(
    <PainScale
      title="Best for the last 48 hours"
      bestCaseText="Worst Pain Imaginable"
      worstCaseText="No Pain"
      onChange={mockFunction}
    />
  );

  const fourScore = screen.getByTestId("4");
  userEvent.click(fourScore);

  await waitFor(() => {
    expect(fourScore).toHaveClass("MuiButton-contained");
  });

  const nineScore = screen.getByTestId("9");
  userEvent.click(nineScore);

  await waitFor(() => {
    expect(fourScore).toHaveClass("MuiButton-text");
  });
  await waitFor(() => {
    expect(nineScore).toHaveClass("MuiButton-contained");
  });
});


// TODO: add test for prop types 