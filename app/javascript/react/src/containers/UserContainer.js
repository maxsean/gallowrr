import React from 'react'
import GameTile from '../components/GameTile'

class UserContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      games: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.props.current_user_id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        games: data
      })
    })
  }

  handleClick(event){
    event.preventDefault()
    fetch('/api/v1/games', {
      credentials: 'same-origin',
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(this.props.curcurrent_user_id)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        games: data
      })
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
        {games}
        <button onClick={this.handleClick}>
          Add a Game
        </button>
      </div>
    )
  }
}

export default UserContainer
