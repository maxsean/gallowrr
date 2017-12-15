import AvailableTile from '../../src/components/AvailableTile'
import { Link } from 'react-router'
import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('AvailableTile', () => {
  let letters,
      wrapper;

  beforeEach(() => {
    letters = ["A", "B"]
    wrapper = mount(
      <AvailableTile
      letters={letters}
      />
    )
  })

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      letters: letters
    })
  })

  it('should have divs with class letter-tile equal to length of letters prop array', () => {
    expect(wrapper.find('div.available').children().length).toBe(letters.length)
  })

  it('should render letter tiles for each item in letters prop', () => {
    expect(wrapper.find('div.available').children().at(0).text()).toBe(letters[0])
    expect(wrapper.find('div.available').children().at(1).text()).toBe(letters[1])
  })

})
