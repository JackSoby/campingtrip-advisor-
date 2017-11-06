import React from 'react';
import NavBar from './containers/NavBar'
import Form from './containers/Form'
import CampShow from './containers/CampShow'
import ProfilePage from './containers/ProfilePage'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const CampingtripAdvisor = props => {
  return(
  <div>
    <Router>
      <main>
       <NavBar/>
        <Switch>
          <Route exact path='/' component={Form} />
          <Route path='/camp/:id' component={CampShow} />
          <Route path='/user/:id' component={ProfilePage}/>
        </Switch>
       </main>
      </Router>
  </div>
  )
}

export default CampingtripAdvisor
