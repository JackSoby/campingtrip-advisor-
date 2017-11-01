import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      signedIn: false,
      id: ''
    }
  }

  componentDidMount() {
    fetch(`/api/v1/members.json`,
    {method: 'GET', redirect: 'follow',
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"}
   })
    .then(response => response.json())
    .then(body => {
      this.setState({ id: body.id, signedIn: body.signed_in})
    })
  }
  render() {
    let button;
    let profile;
    let pageLink= `/user/${this.state.id}`
   if (this.state.signedIn) {
     button = <a href='/users/sign_out'  className='sign-in'>Sign Out</a>
     profile =  <NavLink className='profile' to={pageLink} key={`navbar-${2}`}>Profile Page</NavLink>
   } else {
     button =<a href="/users/sign_in" className='profile'>Sign In</a>
     profile=''
   }
    return(
    <div>
       <div className="top-bar">
          <nav>
            <NavLink className='home' to='/' key={`navbar-${1}`}>Camping Trip Advisor</NavLink>
            <span>
              {button}
            </span>
            <span className='profile'>{profile}</span>
          </nav>
       </div>
    </div>
    )
  }
}

export default NavBar
