import React from 'react';
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import WelcomeContainer from './containers/WelcomeContainer';
import SignUpFormContainer from './containers/SignUpFormContainer';


const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={WelcomeContainer} />
          <Route path='/signup' component={SignUpFormContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App
