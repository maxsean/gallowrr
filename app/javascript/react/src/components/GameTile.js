import React from 'react'
import { Link } from 'react-router'

const GameTile = (props) => {
  let color = "#FFFDDB"
  let victory;
  if(props.game.outcome == "success"){
    color = "#9BF99B"
    victory =
      <div>
        Word:
        {props.game.word.body}
      </div>
  } else if(props.game.outcome == "failure"){
    color = "#DD6C38"
  }

  return(
    <div className="game-tile" style={{backgroundColor: color}}>
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
      {victory}
    </div>
  )
}

export default GameTile
