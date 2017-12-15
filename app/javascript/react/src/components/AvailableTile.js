import React from 'react'

class AvailableTile extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      letters: this.props.letters
    }
  }

  // using react lifecycle method to make sure component re-renders when receiving new props
  componentWillReceiveProps(nextProps) {
    this.setState({ letters: nextProps.letters });
  }

  render(){
    // only AvailableTile letters can be clickable. Check against SecretWordContainer and ChosenTile
    let letters;
    if(this.props.letters){
      letters = this.props.letters.map(letter => {
        return(
          <div className="letter-tile"
            key={letter}
            onClick={this.props.handleClick}
            >
              {letter}
            </div>
        )
      })
    }

    return(
      <div className="available-tile">
        <p>Available Letters</p>
        <div className="available">
          {letters}
        </div>
      </div>
    )
  }
}

export default AvailableTile
