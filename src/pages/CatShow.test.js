import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatShow Loads...",() => {
  it("displays a not found cat image", () => {
    const catShow = shallow(<CatShow/>)
    const header = catShow.find("h1")
    expect(header.length).toEqual(1);
  })
  it("displays the cats information", () => {
    const catShow = shallow(<CatShow/>)
    const header = catShow.find("p")
    expect(header.length).toEqual(3);
  })
})
