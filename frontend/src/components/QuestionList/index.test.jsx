import React from "react";
import {  render, screen, waitFor } from "@testing-library/react";
import QuestionList from "./index";
import { getSymptoms } from "services/api";

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

jest.mock("services/api");

it("displays the multiple question component when needed", async () => {
  const data = {
    title: "O que você está sentindo nesse momento?",
    multipleChoiceQuestion: true,
    alternatives: [
      "Dor",
      "Palpitação",
      "Falta de ar",
      "Náusea",
      "Vômito",
      "Sudorese",
      "Palidez",
      "Tontura",
      "Fraqueza",
      "Desmaio",
      "Inchaço",
    ],
  };
  getSymptoms.mockImplementation(
    () => new Promise((resolve) => resolve({ data: data }))
  );

  render(<QuestionList />);

  await waitFor(() => {
    expect(screen.getByTestId("multiple-question-container")).toBeTruthy();
  });
});

it.todo("displays the single question component when needed");
it.todo("sends the question response to the backend API");
it.todo("loads the next question after responding one");
it.todo("shows a message when finishes the questionaire");
