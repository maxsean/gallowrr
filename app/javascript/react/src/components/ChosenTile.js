import React from 'react'

class ChosenTile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      chosen_letters: this.props.chosen_letters
    }
  }

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
      <div>
        {letters}
      </div>
    )
  }
}

export default ChosenTile
