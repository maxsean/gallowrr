import React from 'react'

class SecretWordContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      chosen_letters: this.props.chosen_letters,
      word: this.props.word,
      display_array: []
    }
    this.determineDisplay = this.determineDisplay.bind(this)
  }

  componentDidMount(){
    if(this.state.word){
      this.determineDisplay()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ chosen_letters: nextProps.chosen_letters });
    if(this.state.word){
      this.determineDisplay()
    }
  }

  determineDisplay(){
    let display_array = []
    let word = this.state.word.toUpperCase()

    for(let i = 0; i < word.length; i++){
      if(this.state.chosen_letters.includes(word[i])){
        display_array.push(word[i])
      } else {
        display_array.push("_")
      }
    }

    this.setState({
      display_array: display_array
    })
  }

  render(){
    let display;
    if(this.state.display_array.length > 0){
      display = this.state.display_array.map(letter => {
        return(
          <div className="letter-tile"
            key={String(Date.now()) + '-' + Math.floor(Math.random() * 10000)}
            >
              {letter}
          </div>
        )
      })
    }

    return(
      <div>
        {display}
      </div>
    )
  }
}

export default SecretWordContainer
