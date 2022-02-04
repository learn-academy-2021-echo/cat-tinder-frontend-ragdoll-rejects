import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatIndex Loads...",() => {
  it("displays a header with text", () => {
    const catIndex = shallow(<CatIndex/>)
    const header = catIndex.find("h1")
    expect(header.length).toEqual(1);
  })
})
