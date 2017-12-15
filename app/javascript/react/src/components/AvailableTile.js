import React from 'react'

class AvailableTile extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      letters: this.props.letters
    }
  }

  componentWillReceiveProps(nextProps) {
  this.setState({ letters: nextProps.letters });
}


  render(){
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
