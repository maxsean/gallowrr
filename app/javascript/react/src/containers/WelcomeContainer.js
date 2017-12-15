import React, {Component} from 'react';
import WelcomeTile from '../components/WelcomeTile'
import UserContainer from './UserContainer'

class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: {}
    }
  }

  componentDidMount() {
    this.fetchCurrentUser()
  }

  fetchCurrentUser() {
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ current_user: data.user });
    })
  }


  render() {
    // home page display is determined whether or not a user is signed in
    let display;
    if (this.state.current_user.id) {
      display =
        <UserContainer
          current_user_id={this.state.current_user.id}
          current_user_handle={this.state.current_user.handle}
        />
    } else {
      display =
        <WelcomeTile/>
    }
    return(
      <div>
        {display}
      </div>
    )
  }
}

export default WelcomeContainer;
