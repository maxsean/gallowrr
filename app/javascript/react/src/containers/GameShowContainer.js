import React from 'react'
import AlphabetContainer from './AlphabetContainer'
import HangmanContainer from './HangmanContainer'

class GameShowContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      incorrect: 0,
      chosen_letters: [],
      word: null,
    }
  }

  componentDidMount(){
    fetch(`/api/v1/games/${this.props.params.id}`)
    .then(response => response.json())
    .then(data => {
      debugger;
    })
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default GameShowContainer
