import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home Loads...",() => {
  it("displays a home cat image", () => {
    const home = shallow(<Home/>)
    const imgWrapper = home.find("img")
    console.log(imgWrapper.props());
    expect(imgWrapper.length).toEqual(1)
    expect(imgWrapper.props().src).toEqual('cuteasscat.png')
    expect(imgWrapper.props().alt).toEqual('black cat')
    expect(imgWrapper.props().className).toEqual('cuteasscat')
  })
})