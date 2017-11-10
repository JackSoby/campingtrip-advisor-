import React from 'reacy'
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


})
