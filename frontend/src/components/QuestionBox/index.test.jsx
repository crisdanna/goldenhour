import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
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

it("calls the callback method with the response of the selected answer - 1", async () => {
  const handleClick = jest.fn();
  render(
    <QuestionBox
      title={'Have you received any treatment for this problem?'}
      alternatives={['Yes', 'No']}
      handleSelectedOption={handleClick}
    />
  );
  userEvent.click(screen.getByText('Yes'))
  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(handleClick).toHaveBeenCalledWith('Yes')
  expect(console.error).not.toBeCalled();
})

it("calls the callback method with the response of the selected answer - 2", async () => {
  const handleClick = jest.fn();
  render(
    <QuestionBox
      title={'Have you received any treatment for this problem?'}
      alternatives={['Yes', 'No']}
      handleSelectedOption={handleClick}
    />
  );
  userEvent.click(screen.getByText('No'))
  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(handleClick).toHaveBeenCalledWith('No')
  expect(console.error).not.toBeCalled();
})