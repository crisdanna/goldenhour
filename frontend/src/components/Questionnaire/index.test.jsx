import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import Questionnaire from "./index";
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

jest.mock("services/api");

describe("multiple choice question", () => {
  it("displays the multiple question component when needed", async () => {
    const data = {
      title: "Currently I am experiencing:",
      multipleChoiceQuestion: true,
      alternatives: [
        "Shortness of breath",
        "Dizziness",
        "Headaches",
        "Changes in bowel or bladder function",
        "Nausea /Vomiting",
      ],
    };
    api.getSymptoms.mockImplementation(
      () => new Promise((resolve) => resolve({ data: data }))
    );

    render(<Questionnaire />);

    await waitFor(() => {
      expect(screen.getByTestId("multiple-question-container")).toBeTruthy();
    });
  });

  it("sends the question response to the backend API", async () => {
    const apiCallSpy = jest.spyOn(api, "postInitialSymptoms");

    const data = {
      title: "Currently I am experiencing:",
      multipleChoiceQuestion: true,
      alternatives: [
        "Fever/chills/sweats",
        "Unexplained weight loss",
        "Numbness or Tingling",
        "Changes in appetite",
      ],
    };
    api.getSymptoms.mockImplementation(
      () => new Promise((resolve) => resolve({ data: data }))
    );

    render(<Questionnaire />);

    await waitFor(() => {
      expect(
        screen.getByText("Currently I am experiencing:")
      ).toBeInTheDocument();
    });
    const weightLossCb = within(
      screen.getByTestId("checkbox-Unexplained weight loss")
    ).getByRole("checkbox");
    userEvent.click(weightLossCb);

    const appetiteCb = within(
      screen.getByTestId("checkbox-Changes in appetite")
    ).getByRole("checkbox");
    userEvent.click(appetiteCb);

    screen.getByRole("button", { name: "Próxima pergunta" }).click();
    expect(apiCallSpy).toBeCalledWith({
      data: {
        selectedOptions: ["Unexplained weight loss", "Changes in appetite"],
      },
    });
  });
});

describe("single choice question", () => {
  it("displays the single question component when needed", async () => {
    const data = {
      title: "Have you ever had this problem before?",
      alternatives: ["Yes", "No"],
    };
    api.getSymptoms.mockImplementation(
      () => new Promise((resolve) => resolve({ data: data }))
    );

    render(<Questionnaire />);

    await waitFor(() => {
      expect(screen.getByTestId("single-question-container")).toBeTruthy();
    });
  });

  it("sends the question response to the backend API", async () => {
    const apiCallSpy = jest.spyOn(api, "postInitialSymptoms");
    const data = {
      title: "Are you allergic to latex?",
      alternatives: ["Yes", "No"],
    };
    api.getSymptoms.mockImplementation(
      () => new Promise((resolve) => resolve({ data: data }))
    );

    render(<Questionnaire />);

    await waitFor(() => {
      expect(screen.getByText("Yes")).toBeInTheDocument();
    });
    userEvent.click(screen.getByText("Yes"));
    expect(apiCallSpy).toBeCalledWith({ data: "Yes" });
  });
});

it.todo("loads the next question after responding one");
it.todo("shows a message when finishes the questionaire");
