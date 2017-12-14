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
            key={String(Date.now()) + '-' + Math.floor(Math.random() * 10000)}
            onClick={this.props.handleClick}
            >
              {letter}
            </div>
        )
      })
    }

    return(
      <div className="available-tile">
        {letters}
      </div>
    )
  }
}

export default AvailableTile
