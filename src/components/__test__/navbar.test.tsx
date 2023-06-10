import { render } from "@testing-library/react";
import NavBar from "../navbar";

describe('NavBar', () => {
  it(`let's the user download my resume`, ()=> {
    //arrange
    render(<NavBar/>);
  });
});