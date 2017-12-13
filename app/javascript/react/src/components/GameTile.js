import React from 'react'
import { Link } from 'react-router'

const GameTile = (props) => {
  return(
    <div className="game-tile">
      <Link to={`/games/${props.game.id}`}>
        Click to Play
      </Link>
      <div>
        Incorrect guesses: {props.game.incorrect}
      </div>
    </div>
  )
}

export default GameTile
