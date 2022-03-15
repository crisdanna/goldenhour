import React from "react";
import { render, screen } from "@testing-library/react";
import QuestionBox from "./index";

beforeEach(() => {
  jest.spyOn(console, "error");
  jest.spyOn(console, "warn");
  jest.spyOn(console, "log");
});

afterEach(() => {
  expect(console.warn).not.toBeCalled();
  expect(console.log).not.toBeCalled();
});

it("renders without crashing", () => {
  const alternatives = [
    "Less than an hour ago",
    "At least 2 hours ago",
    "I don't remember",
  ];
  render(
    <QuestionBox
      title={"When did the pain started?"}
      alternatives={alternatives}
    />
  );
  expect(console.error).not.toBeCalled();
});

it("warns when the required attribute is not provided", () => {
  render(<QuestionBox />);
  expect(console.error).toBeCalled();
});

it("renders the title", () => {
  const alternatives = ["gradually", "suddenly", "injury"];
  render(
    <QuestionBox title={"How did it start?"} alternatives={alternatives} />
  );
  expect(console.error).not.toBeCalled();
  expect(screen.getByText("How did it start?")).toBeTruthy();
});

it("renders the alternatives", () => {
  const alternatives = [
    "Getting better",
    "About the same",
    "Getting worse",
    "Fluctuating",
  ];
  render(
    <QuestionBox
      title={"My symptoms are currently"}
      alternatives={alternatives}
    />
  );
  expect(console.error).not.toBeCalled();
  expect(screen.getByText("Getting better")).toBeTruthy();
  expect(screen.getByText("About the same")).toBeTruthy();
  expect(screen.getByText("Getting worse")).toBeTruthy();
  expect(screen.getByText("Fluctuating")).toBeTruthy();
});
