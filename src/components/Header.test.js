import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";
Enzyme.configure({ adapter: new Adapter() });

describe("When the header loads...", () => {
  let header;
  beforeEach(() => {
    header = shallow(<Header />);
  });

  it("displays a navlink on the header", () => {
    //Arrange the Header

    //Act on the header by finding an element
    const navLinkWrapper = header.find("NavLink")
    expect(navLinkWrapper.length).toEqual(3);
  });

  it("Checks if a h1 is present", () => {  
    // const navBarBrand = header.find("NavBarBrand")
    const renderedHeader = header.find("h1")
    expect(renderedHeader.length).toEqual(1);
  })
})
