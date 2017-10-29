import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      signedIn: false,
      avatar: ''
    }
  }

  // componentDidMount() {
  //   fetch(`/api/v1/members.json`,
  //   {method: 'GET', redirect: 'follow',
  //   credentials: "same-origin",
  //   headers: {"Content-Type": "application/json"}})
  //   .then(response => response.json())
  //   .then(body => {
  //     this.setState({ username: body.username, signedIn: body.signed_in, avatar: body.avatar })
  //   })
  // }

  render() {
    let button;
    if (this.state.signedIn) {
      button = <div><span className='welcome'>Welcome {this.state.username} <img className='banner-profile-pic' src={`${this.state.avatar}`}></img></span>
      <span><a href='/users/sign_out' key={`navbar-${4}`} className='sign-in'>Sign Out</a></span></div>
    } else {
      button =<a href='/users/sign_in' key={`navbar-${4}`} className='sign-in'>Sign In</a>
    }

    return(
    <div>
       <div className="top-bar">
          <nav>
            <NavLink className='home' to='/' key={`navbar-${1}`}>Camping Trip Advisor</NavLink>
            {button}
          </nav>
       </div>
    </div>
    )
  }
}

export default NavBar
