
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe("When NotFound Loads...",() => {
  it("displays a not found cat image", () => {
    const notFound = shallow(<NotFound/>)
    const imgWrapper = notFound.find("img")
    expect(imgWrapper.length).toEqual(1)
  })
})