import React from 'react'
import SecretWordContainer from '../../src/containers/SecretWordContainer'
import ChosenTile from '../../src/components/ChosenTile'
import AvailableTile from '../../src/components/AvailableTile'
import AlphabetContainer from '../../src/containers/AlphabetContainer'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('AlphabetContainer', () => {
  let chosen_letters,
      wrapper

  beforeEach(() => {
    spyOn(AlphabetContainer.prototype, 'determineAvailableLetters').and.callThrough()
    chosen_letters = ["A", "B", "C", "D", "E", "F", "G"]
    wrapper = mount(
      <AlphabetContainer
        chosen_letters={chosen_letters}
        display_array={[]}
      />
    )
  })

  it('should call determineAvailableLetters function on mount', () => {
    expect(AlphabetContainer.prototype.determineAvailableLetters).toHaveBeenCalled()
  })

  it('determineAvailableLetters should change state to reflect available letters', () => {
    expect(AlphabetContainer.prototype.determineAvailableLetters).toHaveBeenCalled()
    expect(wrapper.state()).toEqual({
      available_letters: ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    })
  })

})
