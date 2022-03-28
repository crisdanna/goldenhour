import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";

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

it('shows the attendance history button', () => {
    render(<Home/>)
    expect(screen.getByRole("button", { name: "Histórico de Atendimento" })).toBeTruthy();
})
it('shows the tests carried out button', () => {
    render(<Home/>)
    expect(screen.getByRole("button", { name: "Exames Realizados" })).toBeTruthy();
})

it('shows the habits & health button', () => {
    render(<Home/>)
    expect(screen.getByRole("button", { name: "Hábitos & Saúde" })).toBeTruthy();
})

it('shows the emmergency questionnaire button', () => {
    render(<Home/>)
    expect(screen.getByRole("button", { name: "Questionário de Emergência" })).toBeTruthy();
})
