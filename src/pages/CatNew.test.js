import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew Loads...", () => {
  it("it displays a h2 header", () => {
    const catNew = shallow(<CatNew/>)
    const h2 = catNew.find("h2")
    expect(h2.length).toEqual(1);
  })
  it("displays a form for the user to fill out", () => {
    const catNew = shallow(<CatNew/>)
    const form = catNew.find("Form")
    expect(form.length).toEqual(1)
  })
})
