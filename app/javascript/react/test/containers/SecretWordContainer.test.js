import React from 'react'
import SecretWordContainer from '../../src/containers/SecretWordContainer'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('SecretWordContainer', () => {
  let display_array,
      wrapper;

  beforeEach(() => {
    display_array = ["A", "B"]
    wrapper = mount(
      <SecretWordContainer
      display_array={display_array}
      />
    )
  })

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      display_array: display_array
    })
  })

  it('should have divs with class letter-tile equal to length of display_array prop array', () => {
    expect(wrapper.find('div.secret-word').children().length).toBe(display_array.length)
  })

  it('should render letter tiles for each item in display_array prop', () => {
    expect(wrapper.find('div.secret-word').children().at(0).text()).toBe(display_array[0])
    expect(wrapper.find('div.secret-word').children().at(1).text()).toBe(display_array[1])
  })

})
