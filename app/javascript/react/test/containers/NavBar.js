import React from 'react'
import NavBar from '../../src/containers/NavBar';
import { shallow } from 'enzyme'
import 'whatwg-fetch'

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NavBar/>
    )
  })

  it('should render two div elements', () => {
    expect(wrapper.find('div').length).toEqual(2)
  })

  it('should render 2 span elements', () => {
    expect(wrapper.find('span').length).toEqual(2)
  })

  it('should render 1 nav element', () => {
    expect(wrapper.find('nav').length).toEqual(1)
  })
  it('should render 1 NavLink element', () => {
    expect(wrapper.find('NavLink').length).toEqual(1)
  })


})
