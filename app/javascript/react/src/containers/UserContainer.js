import React from 'react'
import GameTile from '../components/GameTile'

class UserContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      games: []
    }
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
      </div>
    )
  }
}

export default UserContainer
