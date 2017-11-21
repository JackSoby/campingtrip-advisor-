import React from 'react'
import ProfilePage from '../../src/containers/ProfilePage';
import { shallow } from 'enzyme'
import 'whatwg-fetch'

describe('ProfilePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ProfilePage/>
    )
  })
  it('should render 7 div element', () => {
    expect(wrapper.find('div').length).toEqual(7)
  })
  it('should render one h1 element', () => {
    expect(wrapper.find('h1').length).toEqual(1)
  })


})
