import React from 'react'
import SecretWordContainer from './SecretWordContainer'
import ChosenTile from '../components/ChosenTile'
import AvailableTile from '../components/AvailableTile'

class AlphabetContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      available_letters: []
    }
    this.determineAvailableLetters = this.determineAvailableLetters.bind(this)
  }

  componentDidMount(){
    this.determineAvailableLetters()
  }

  componentWillReceiveProps(nextProps) {
  this.determineAvailableLetters();
}


  determineAvailableLetters(){
    let alphabet_string = 'abcdefghijklmnopqrstuvwxyz'
    let alphabet_array = alphabet_string.toUpperCase().split('')
    let available_letters = []

    if(this.props.chosen_letters.length > 0){
      for(let i = 0; i < alphabet_array.length; i++){
        if(!this.props.chosen_letters.includes(alphabet_array[i])){
          available_letters.push(alphabet_array[i])
        }
      }
      this.setState({
        available_letters: available_letters
      })
    } else {
      this.setState({
        available_letters: alphabet_array
      })
    }
  }

  render(){
    return(
      <div className="alphabet-container">
        <hr/>
        <SecretWordContainer
          word={this.props.word}
          chosen_letters={this.props.chosen_letters}
        />
        <hr/>
        <ChosenTile
          chosen_letters={this.props.chosen_letters}
        />
        <hr/>

        <AvailableTile
          letters={this.state.available_letters}
          handleClick={this.props.handleClick}
        />
        <hr/>

      </div>
    )
  }
}

export default AlphabetContainer
