import React from 'react'

class SecretWordContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display_array: this.props.display_array
    }
    // display_array is received from grandparent GameShowContainer
  }

  // using react lifecycle method to make sure component re-renders when receiving new props
  componentWillReceiveProps(nextProps) {
    this.setState({
      chosen_letters: nextProps.chosen_letters,
      display_array: nextProps.display_array
    });
  }

  render(){
    // need to refactor unique key generator line 26.
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
