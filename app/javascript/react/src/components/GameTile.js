import React from 'react'
import { Link } from 'react-router'

const GameTile = (props) => {
  // props received from parent UserContainer
  let color = "#FFFDDB"
  let victory;
  // if player wins a hangman game, the secret word is revealed on home/root page with game list, additionally color of the game tile changes to reflect game outcome
  if(props.game.outcome == "success" && props.game.word){
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
