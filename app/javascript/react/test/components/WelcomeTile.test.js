import WelcomeTile from '../../src/components/WelcomeTile'
import { Link } from 'react-router'
import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('WelcomeTile', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <WelcomeTile />
    )
  })
  it('should have header', () => {
    expect(wrapper.find('h1').text()).toBe("Welcome to GallowRR")
  })

  it('should have app description', () => {
    expect(wrapper.find('p').at(0).text()).toBe("A simple hangman app built using Ruby on Rails and React.js")
  })

  it('should ask user to sign in or sign up', () => {
    expect(wrapper.find('p').at(1).text()).toBe("Please sign in or sign up")
  })
})
