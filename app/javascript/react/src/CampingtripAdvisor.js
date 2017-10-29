import React from 'react';
import NavBar from './containers/NavBar'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const CampingtripAdvisor = props => {
  return(
  <div className='background-image'>
  <Router>
    <main>
      <NavBar/>
       <Route>
      </Route>
    </main>
    </Router>
  </div>
  )
}

export default CampingtripAdvisor
