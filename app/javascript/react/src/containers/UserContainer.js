import React from 'react'
import GameTile from '../components/GameTile'

class UserContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      games: [],
      games_active: null,
      games_won: null,
      games_lost: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.props.current_user_id}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      let games = JSON.parse(data.games)
      this.setState({
        games: games,
        games_active: data.games_active,
        games_won: data.games_won,
        games_lost: data.games_lost
      })
    })
  }

  handleClick(event){
    // triggers every time user clicks Add Game button
    event.preventDefault()
    fetch('/api/v1/games', {
      credentials: 'same-origin',
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(this.props.current_user_id)
    })
    .then(response => response.json())
    .then(data => {
      let games = JSON.parse(data.games)
      this.setState({
        games: games,
        games_active: data.games_active
      }) // list of games is updated
    })
  }

  render() {
    let games;
    if(this.state.games.length > 0){
      games = this.state.games.map(game => {
        return(
          <GameTile
            key={String(Date.now()) + '-' + game.id}
            game={game}
          />
        )
      })
    }
    return(
      <div className="user-container">
        <div className="game-tile" style={{backgroundColor:"#FFDCAF"}}>
          <h3>{this.props.current_user_handle+"'s Stats:"}</h3>
          <div>Games Active: {this.state.games_active}</div>
          <div>Games Won: {this.state.games_won}</div>
          <div>Games Lost: {this.state.games_lost}</div>
        </div>
        <div className="game-list">
          {games}
        </div>
        <button className="add-button" style={{backgroundColor:"#FFDCAF"}} onClick={this.handleClick}>
          Add a Game
        </button>
      </div>
    )
  }
}

export default UserContainer
