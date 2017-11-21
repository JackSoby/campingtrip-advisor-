import React from 'react'
import NoteTitleField from '../../src/components/NoteTitleField';
import { shallow } from 'enzyme'
import 'whatwg-fetch'

describe('NoteTitleField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NoteTitleField/>
    )
  })
  it('should render one label element', () => {
    expect(wrapper.find('label').length).toEqual(1)
  })

  it('should render two input elements', () => {
    expect(wrapper.find('input').length).toEqual(2)
  })

  it('should render two button elements', () => {
    expect(wrapper.find('button').length).toEqual(2)
  })


})
