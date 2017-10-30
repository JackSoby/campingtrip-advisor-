import React from 'react';
import NavBar from './containers/NavBar'
import Form from './containers/Form'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const CampingtripAdvisor = props => {
  return(
  <div className='background-image'>
  <Router>
    <main>
      <NavBar/>
       <Switch>
        <Route exact path='/' component={Form} />
      </Switch>
    </main>
    </Router>
    <div id="new-border">

  </div>
  </div>
  )
}

export default CampingtripAdvisor
