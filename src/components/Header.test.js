import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("When the Header Load...", () => {
  let header;
  beforeEach(() => {
    header = shallow(<Header />);
  });

  it("displays a navlink on the header", () => {
    //Arrange the Header

    //Act on the header by finding an element
    const navLinkWrapper = header.find("NavLink");
    expect(navLinkWrapper.length).toEqual(3);
  });
  
  
  it("checks for a tag by its class name to contain some text", () => {
    const navBarBrand = header.find("NavBarBrand")
    expect(navBarBrand.length).toEqual(1)
  })
})

