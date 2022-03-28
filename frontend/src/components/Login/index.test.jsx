import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./index";

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

it("shows the section name", () => {
  render(<Login sectionName="Portal do Paciente" />);
  expect(screen.getByText(/portal do paciente/i)).toBeTruthy();
});
it("shows the username field", () => {
  render(<Login />);
  expect(
    screen.getByLabelText(/E-mail cadastrado no hospital Moinhos/i)
  ).toBeTruthy();
});
it("shows the password field", () => {
  render(<Login />);
  expect(screen.getByLabelText(/Senha/i)).toBeTruthy();
});

it("shows the login button", () => {
  render(<Login />);
  expect(screen.getByTestId("submit-button")).toBeTruthy();
  expect(screen.getByRole("button", { name: "ENVIAR" })).toBeTruthy();
});

it("shows the forgot password link", () => {
  render(<Login />);
  expect(
    screen.getByRole("link", { name: "Esqueci minha senha" })
  ).toBeInTheDocument();
});

it("shows the how to link", () => {
  render(<Login />);
  expect(
    screen.getByRole("link", { name: "Como acessar" })
  ).toBeInTheDocument();
});
