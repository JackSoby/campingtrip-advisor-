import React from 'react'
import Form from '../../src/containers/Form';
import { shallow } from 'enzyme'
import 'whatwg-fetch'

describe('Form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Form/>
    )
  })
  it('should render five div elements', () => {
    expect(wrapper.find('div').length).toEqual(5)
  })
  
  it('should render three h1 elements', () => {
    expect(wrapper.find('h1').length).toEqual(3)
  })

  it('should render one form element', () => {
    expect(wrapper.find('form').length).toEqual(1)
  })

  it('should render one input element', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

  it('should render TitleField components', () => {
    expect(wrapper.find('TitleField').length).toEqual(1)
  })

})
