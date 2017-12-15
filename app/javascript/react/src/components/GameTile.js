import React from 'react'
import { Link } from 'react-router'

const GameTile = (props) => {
  return(
    <div className="game-tile">
      <Link to={`/games/${props.game.id}`}>
        Click to Play
      </Link>
      <div>
        Outcome: {props.game.outcome}
      </div>
      <div>
        Total Guesses: {props.game.chosen_letters.length}
      </div>
      <div>
        Incorrect Guesses: {props.game.incorrect}
      </div>
    </div>
  )
}

export default GameTile
