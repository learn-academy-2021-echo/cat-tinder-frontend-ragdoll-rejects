import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("When footer renders", () => {
  it("displays footer", () => {
    const footer = shallow(<Footer />);
    const head4 = footer.find("h4");
    expect(head4.length).toEqual(1);
  });
});
