import ChosenTile from '../../src/components/ChosenTile'
import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('ChosenTile', () => {
  let chosen_letters,
      wrapper;

  beforeEach(() => {
    chosen_letters = ["A", "B"]
    wrapper = mount(
      <ChosenTile
      chosen_letters={chosen_letters}
      />
    )
  })

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      chosen_letters: chosen_letters
    })
  })

  it('should have divs with class letter-tile equal to length of chosen_letters prop array', () => {
    expect(wrapper.find('div.chosen').children().length).toBe(chosen_letters.length)
  })

  it('should render letter tiles for each item in chosen_letters prop', () => {
    expect(wrapper.find('div.chosen').children().at(0).text()).toBe(chosen_letters[0])
    expect(wrapper.find('div.chosen').children().at(1).text()).toBe(chosen_letters[1])
  })

})
