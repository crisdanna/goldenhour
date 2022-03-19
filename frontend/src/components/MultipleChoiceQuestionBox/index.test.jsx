import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MultipleChoiceQuestionBox from "./index";

describe("expecting console.error not to be called", () => {
  beforeEach(() => {
    jest.spyOn(console, "error");
    jest.spyOn(console, "warn");
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    expect(console.warn).not.toBeCalled();
    expect(console.log).not.toBeCalled();
    expect(console.error).not.toBeCalled();
  });

  it("renders the multiple choice explanation text", () => {
    render(
      <MultipleChoiceQuestionBox
        title={"Currently I am experiencing:"}
        alternatives={[
          "Fever/chills/sweats",
          "Poor balance (falls)",
          "Anxiety",
          "Shortness of breath",
          "Dizziness",
          "Headaches",
        ]}
      />
    );
    expect(screen.getByText("Selecione todas que se aplicam")).toBeTruthy();
  });

  it("renders the title", () => {
    const alternatives = [
      "Cancer",
      "Diabetes",
      "Kidney Disease",
      "Liver Disease",
      "Stroke",
    ];
    render(
      <MultipleChoiceQuestionBox
        title={
          "Select each condition that you have been told you have (or had)"
        }
        alternatives={alternatives}
      />
    );
    expect(
      screen.getByText(
        "Select each condition that you have been told you have (or had)"
      )
    ).toBeTruthy();
  });

  it("renders the alternatives", () => {
    const alternatives = [
      "sitting",
      "lying down",
      "standing",
      "walking",
      "stress",
    ];
    render(
      <MultipleChoiceQuestionBox
        title={"Select the activities which make your pain worse"}
        alternatives={alternatives}
      />
    );
    expect(screen.getByTestId("checkbox-sitting")).toBeTruthy();
    expect(screen.getByTestId("checkbox-sitting")).toBeTruthy();
    expect(screen.getByTestId("checkbox-lying down")).toBeTruthy();
    expect(screen.getByTestId("checkbox-standing")).toBeTruthy();
    expect(screen.getByTestId("checkbox-walking")).toBeTruthy();
    expect(screen.getByTestId("checkbox-stress")).toBeTruthy();
  });

  it("shows the 'Next Question' button", () => {
    const alternatives = [
      "sitting",
      "lying down",
      "standing",
      "walking",
      "stress",
    ];
    render(
      <MultipleChoiceQuestionBox
        title={"Select the activities which make your pain worse"}
        alternatives={alternatives}
      />
    );
    expect(
      screen.getByRole("button", { name: "Próxima pergunta" })
    ).toBeTruthy();
  });

  it("change the state when selecting some options", () => {
    const alternatives = [
      "sitting",
      "lying down",
      "standing",
      "walking",
      "stress",
    ];
    render(
      <MultipleChoiceQuestionBox
        title={"Select the activities which make your pain worse"}
        alternatives={alternatives}
      />
    );

    const sittingCb = within(screen.getByTestId("checkbox-sitting")).getByRole(
      "checkbox"
    );
    userEvent.click(sittingCb);

    const standingCb = within(
      screen.getByTestId("checkbox-standing")
    ).getByRole("checkbox");
    userEvent.click(standingCb);

    expect(sittingCb).toBeChecked();
    expect(standingCb).toBeChecked();
  });

  it("sends a list with the checked registries when clicking the submit button", () => {
    const handleClick = jest.fn();
    const alternatives = ["standing", "walking", "stress"];
    render(
      <MultipleChoiceQuestionBox
        title={"Select the activities which make your pain worse"}
        alternatives={alternatives}
        handleSubmit={handleClick}
      />
    );

    const walkingCb = within(screen.getByTestId("checkbox-walking")).getByRole(
      "checkbox"
    );
    userEvent.click(walkingCb);

    const stressCb = within(screen.getByTestId("checkbox-stress")).getByRole(
      "checkbox"
    );
    userEvent.click(stressCb);

    screen.getByRole("button", { name: "Próxima pergunta" }).click();
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith({
      selectedOptions: ["walking", "stress"],
    });
  });
});

describe("expecting console.error to be called", () => {
  beforeEach(() => {
    jest.spyOn(console, "error");
    jest.spyOn(console, "warn");
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    expect(console.warn).not.toBeCalled();
    expect(console.log).not.toBeCalled();
    expect(console.error).toBeCalled();
  });

  it("warns when the required attributes are not provided", () => {
    render(<MultipleChoiceQuestionBox />);
  });
});
