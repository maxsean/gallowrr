import React from 'react'

class ChosenTile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      chosen_letters: this.props.chosen_letters
    }
  }

  // using react lifecycle method to make sure component re-renders when receiving new props
  componentWillReceiveProps(nextProps) {
  this.setState({ chosen_letters: nextProps.chosen_letters });
  }

  render(){
    let letters;
    if(this.state.chosen_letters){
      letters = this.state.chosen_letters.map(letter => {
        return(
          <div className="letter-tile"
            key={letter}>
              {letter}
            </div>
        )
      })
    }

    return(
      <div className="chosen-tile">
        <p>Guesses</p>
        <div className="chosen">
          {letters}
        </div>
      </div>
    )
  }
}

export default ChosenTile
