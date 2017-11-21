import React, {Component} from 'react'
import CampingtripAdvisor from '../src/CampingtripAdvisor';
import { shallow } from 'enzyme'

describe('CampingtripAdvisor', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CampingtripAdvisor/>
    )
  })

  it('should render NavBar components', () => {
    expect(wrapper.find('NavBar').length).toEqual(1)
  })

  it('should render one div element', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
  it('should render one main element', () => {
    expect(wrapper.find('main').length).toEqual(1)
  })
  it('should render one switch element', () => {
    expect(wrapper.find('Switch').length).toEqual(1)
  })

  it('should render one router element', () => {
    expect(wrapper.find('BrowserRouter').length).toEqual(1)
  })

  it('should render three route elements', () => {
    expect(wrapper.find('Route').length).toEqual(3)
  })

  it('should render a Route component', () => {
      expect(wrapper.find('Route').at(0).prop('path')).toEqual('/')
      expect(wrapper.find('Route').at(1).prop('path')).toEqual('/camp/:id')
      expect(wrapper.find('Route').at(2).prop('path')).toEqual('/user/:id')
    })


})
