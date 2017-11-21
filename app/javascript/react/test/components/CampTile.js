import React from 'react'
import CampTile from '../../src/components/CampTile';
import { shallow } from 'enzyme'
import 'whatwg-fetch'

describe('CampTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CampTile/>
    )
  })

  it('should render one div element', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should render two p elements', () => {
    expect(wrapper.find('p').length).toEqual(2)
  })

  it('should render one ul element', () => {
    expect(wrapper.find('ul').length).toEqual(1)
  })

  it('should render one NavLink element', () => {
    expect(wrapper.find('NavLink').length).toEqual(1)
  })

  it('should render one img element', () => {
    expect(wrapper.find('img').length).toEqual(1)
  })

})
