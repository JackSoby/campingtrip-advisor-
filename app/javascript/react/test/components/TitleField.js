import React from 'react'
import TitleField from '../../src/components/TitleField';
import { shallow } from 'enzyme'
import 'whatwg-fetch'

describe('TitleField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TitleField/>
    )
  })
  it('should render one label element', () => {
    expect(wrapper.find('label').length).toEqual(1)
  })

  it('should render one input element', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })


})
