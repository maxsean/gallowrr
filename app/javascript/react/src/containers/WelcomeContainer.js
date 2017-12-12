import React, {Component} from 'react';
import { Link } from 'react-router';

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

    return(
      <div>
        welcome
      </div>
    )
  }
}

export default WelcomeContainer;
