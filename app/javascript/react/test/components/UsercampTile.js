import React from 'react'
import UsercampTile from '../../src/components/UsercampTile';
import { shallow } from 'enzyme'
import 'whatwg-fetch'

describe('UsercampTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <UsercampTile/>
    )
  })
  
  it('should render one p element', () => {
    expect(wrapper.find('p').length).toEqual(1)
  })

  it('should render three div elements', () => {
    expect(wrapper.find('div').length).toEqual(3)
  })

  it('should render NoteTitleField components', () => {
    expect(wrapper.find('NoteTitleField').length).toEqual(1)
  })

  it('should render one NavLink elements', () => {
    expect(wrapper.find('NavLink').length).toEqual(1)
  })

})
