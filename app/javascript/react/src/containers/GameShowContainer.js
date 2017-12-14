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
      game_user_id: null,
      current_user_id: null
    }
    this.fetchGame = this.fetchGame.bind(this)
    this.fetchCurrentUser = this.fetchCurrentUser.bind(this)
  }

  componentDidMount(){
    this.fetchCurrentUser()
    this.fetchGame()
  }

  fetchCurrentUser(){
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ current_user_id: data.user.id });
    })
  }

  fetchGame(){
    fetch(`/api/v1/games/${this.props.params.id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        incorrect: data.incorrect,
        chosen_letters: data.chosen_letters,
        word: data.word.body,
        game_user_id: data.user_id
      })
    })
  }

  render(){
    let display =
    <h1>You are not authorized to view this game</h1>

    if(this.state.game_user_id == this.state.current_user_id){
      display =
      <div>
        <HangmanContainer
          incorrect={this.state.incincorrect}
        />
        <AlphabetContainer
          chosen_letters={this.state.chosen_letters}
          word={this.state.word}
        />
      </div>
    }
    return(
      <div>
        {display}
      </div>
    )
  }
}

export default GameShowContainer
