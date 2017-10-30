import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {

    return(
    <div>
       <div className="top-bar">
          <nav>
            <NavLink className='home' to='/' key={`navbar-${1}`}>Camping Trip Advisor</NavLink>
            <a href='/users/sign_in' key={`navbar-${4}`} className='sign-in'>Sign In</a>
          </nav>
       </div>
    </div>
    )
  }
}

export default NavBar
