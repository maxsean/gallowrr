import React from 'react'
import AlphabetContainer from './AlphabetContainer'
import HangmanContainer from './HangmanContainer'
import ChosenTile from '../components/ChosenTile'

class GameShowContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      incorrect: 0,
      chosen_letters: [],
      word: null,
      game_user_id: null,
      current_user_id: null,
      outcome: "active",
      display_array: []
    }
    this.fetchGame = this.fetchGame.bind(this)
    this.fetchCurrentUser = this.fetchCurrentUser.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.determineDisplay = this.determineDisplay.bind(this)
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
        game_user_id: data.user_id,
        outcome: data.outcome
      })
      this.determineDisplay()
    })
  }

  handleClick(event){
    event.preventDefault()
    let word_array = this.state.word.toUpperCase().split('')

    let chosen_letters = this.state.chosen_letters

    chosen_letters.push(event.target.innerHTML)

    let incorrect = this.state.incorrect
    if(!word_array.includes(event.target.innerHTML)){
      incorrect += 1
    }

    let outcome = this.state.outcome

    if(incorrect >= 10){
      outcome = "failure"
    }

    let payload = {
      incorrect: incorrect,
      chosen_letters: chosen_letters,
      outcome: outcome
    }

    fetch(`/api/v1/games/${this.props.params.id}`, {
      method: "PATCH",
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        incorrect: data.incorrect,
        chosen_letters: data.chosen_letters,
        game_user_id: data.user_id,
        outcome: data.outcome
      })
    })
    this.determineDisplay()
  }

  determineDisplay(){
    let display_array = []
    let word = this.state.word.toUpperCase()

    for(let i = 0; i < word.length; i++){
      if(this.state.chosen_letters.includes(word[i])){
        display_array.push(word[i])
      } else {
        display_array.push("_")
      }
    }

    this.setState({
      display_array: display_array
    })

    let string = display_array.join('').toLowerCase()
    if(string == this.state.word){
      let payload = {
        chosen_letters: this.state.chosen_letters,
        incorrect: this.state.incorrect,
        outcome: "success"
      }
      fetch(`/api/v1/games/${this.props.params.id}`, {
        method: "PATCH",
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          incorrect: data.incorrect,
          chosen_letters: data.chosen_letters,
          game_user_id: data.user_id,
          outcome: data.outcome
        })
      })
    }
  }

  render(){
    let display =
    <div className="game-tile">
      <h2>Sorry, you are not authorized to view this game</h2>
    </div>

    if(this.state.game_user_id == this.state.current_user_id && this.state.outcome == "active"){
      display =
      <div>
        <HangmanContainer
          incorrect={this.state.incorrect}
        />
        <AlphabetContainer
          chosen_letters={this.state.chosen_letters}
          word={this.state.word}
          handleClick={this.handleClick}
          display_array={this.state.display_array}
        />
      </div>
    } else if (this.state.game_user_id == this.state.current_user_id && this.state.outcome == "failure"){
      display =
      <div>
        <HangmanContainer
          incorrect={this.state.incorrect}
        />
        <div className="game-tile">
          <h1>Sorry, you lost.</h1>
          <a href='/'>Return Home</a>
        </div>
      </div>
    } else if (this.state.game_user_id == this.state.current_user_id && this.state.outcome == "success"){
      display =
      <div>
        <HangmanContainer
          incorrect={this.state.incorrect}
        />
        <div className="game-tile">
          <h1>Congratulations!</h1>
          <h3>You correctly guessed: {this.state.word}</h3>
          <a href='/'>Return Home</a>
        </div>
        <ChosenTile
          chosen_letters={this.state.chosen_letters}
        />
      </div>
    }

    return(
      <div>
        <div className="game-page-info">
          <p>Total Guesses: {this.state.chosen_letters.length}</p>
          <p>Total Incorrect Guesses: {this.state.incorrect}</p>
        </div>
        <div className="game-display">
          {display}
        </div>
      </div>
    )
  }
}

export default GameShowContainer
