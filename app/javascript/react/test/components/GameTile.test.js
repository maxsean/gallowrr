import GameTile from '../../src/components/GameTile'
import { Link } from 'react-router'
import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('GameTile', () => {
  let game,
      wrapper

  beforeEach(() => {
    game = {
      id: 1,
      outcome: "success",
      chosen_letters: ["A", "B"],
      incorrect: 1,
      word: {
        body: "test"
      }
    }
    wrapper = mount(
      <GameTile
        game={game}
      />
    )
  })

  it('should have a link to play game', () => {
    expect(wrapper.find('Link'))
  })

  it('should have game outcome status', () => {
    expect(wrapper.find('div').at(1).text()).toBe(`Outcome: ${game.outcome}`)
  })

  it('should have game total guesses', () => {
    expect(wrapper.find('div').at(2).text()).toBe(`Total Guesses: ${game.chosen_letters.length}`)
  })

  it('should have game incorrect guesses', () => {
    expect(wrapper.find('div').at(3).text()).toBe(`Incorrect Guesses: ${game.incorrect}`)
  })

  it('should give word if outcome is success', () => {
    expect(wrapper.find('div').at(4).text()).toBe(`Word:${game.word.body}`)
  })

})
