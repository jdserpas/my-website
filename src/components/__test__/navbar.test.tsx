import { render } from "@testing-library/react";
import NavBar from "../navbar";

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('NavBar', () => {
  it(`let's the user download my resume`, ()=> {
    //arrange
    render(<NavBar/>);
  });
});