import React from 'react'

class HangmanContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    var incorrect = this.props.incorrect

    return(
      <div className="hangman-container">
        <svg version="1.1" viewBox="0 0 300 300" preserveAspectRatio="xMinYMin meet" className="svg-content">
          <rect fill="rgb(0,0,0)" width="150" height="10" x="0" y="230" />

          {incorrect >= 1 ? <svg><rect fill="rgb(0,0,0)" width="10" height="230" x="20" y="0" /><rect fill="rgb(0,0,0)" width="150" height="10" x="20" y="0" /></svg>:null}
          {incorrect >= 2 ? <line x1="140" y1 = "0" x2="140" y2 = "50" stroke = "rgb(0,0,0)"/>:null}
          {incorrect >= 3 ? <circle cx="140" cy="80" r="30" fill="#FFFEDA" stroke="black" strokeWidth="2"/>:null}
          {incorrect >= 4 ? <rect width="5" height="50" x="137" y="110" />:null}
          {incorrect >= 5 ? <line x1="140" y1="120" x2="120" y2="150" stroke="black" strokeLinecap="round" strokeWidth="4"/>:null}
          {incorrect >= 6 ? <line x1="140" y1="120" x2="160" y2="150" stroke="black" strokeLinecap="round" strokeWidth="4"/>:null}
          {incorrect >= 7 ? <line x1="140" y1="160" x2="120" y2="200" stroke="black" strokeLinecap="round" strokeWidth="4"/>:null}
          {incorrect >= 8 ? <line x1="140" y1="160" x2="160" y2="200" strokeLinecap="round" stroke="black" strokeWidth="4"/>:null}
          {incorrect >= 9 ? <svg><line x1="130" y1="70" x2="120" y2="90" stroke="black" strokeLinecap="round" strokeWidth="3"/><line x1="120" y1="70" x2="130" y2="90" stroke="black" strokeLinecap="round" strokeWidth="3"/></svg>:null}
          {incorrect >= 10 ? <svg><line x1="160" y1="70" x2="150" y2="90" stroke="black" strokeLinecap="round" strokeWidth="3"/><line x1="150" y1="70" x2="160" y2="90" stroke="black" strokeLinecap="round" strokeWidth="3"/></svg>:null}
        </svg>
      </div>
    )
  }
}

export default HangmanContainer
