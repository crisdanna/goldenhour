import React from "react";
import { render, screen } from "@testing-library/react";
import UserInformation from "./index";

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

it('shows the patient name', () => {
    render(<UserInformation/>)
    expect(screen.getByTestId('patient-name',{text: 'Miguel Arcanjo dos Santos'})).toBeInTheDocument()
})

it('shows the patient ID number', () => {
    render(<UserInformation/>)
    expect(screen.getByTestId('patient-id',{text: 'ID: 874521658'})).toBeInTheDocument()
    
})
