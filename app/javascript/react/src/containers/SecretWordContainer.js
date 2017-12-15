import React from 'react'

class SecretWordContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      chosen_letters: this.props.chosen_letters,
      word: this.props.word,
      display_array: this.props.display_array
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      chosen_letters: nextProps.chosen_letters,
      display_array: nextProps.display_array
    });
  }

  render(){
    let display;
    if(this.state.display_array.length > 0){
      display = this.state.display_array.map(letter => {
        return(
          <div className="letter-tile"
            key={String(Date.now()) + '-' + Math.floor(Math.random() * 100000) + letter}
            >
              {letter}
          </div>
        )
      })
    }

    return(
      <div className="secret-word-container">
        <p>Secret Word</p>
        <div className="secret-word">
          {display}
        </div>
      </div>
    )
  }
}

export default SecretWordContainer
