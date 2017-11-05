import React, { Component } from 'react';
import UserCampTile from '../components/UserCampTile'


class ProfilePage extends Component {
  constructor(props){
    super(props)
    this.state={
     id: '',
     first_name: '',
     last_name: '',
     fullname: '',
     campgrounds: [],
     userInput: '',
    }

  }


    componentDidMount() {
      fetch(`/api/v1/profiles`,
          {method: 'GET', redirect: 'follow',
          credentials: "same-origin",
          headers: {"Content-Type": "application/json"}})
        .then(response => response.json())
        .then(body => {
        this.setState({id: body.id, campgrounds: body.campgrounds, first_name: body.first_name, last_name: body.last_name, fullname: `${body.first_name} ${body.last_name}`})
    })
  }


  render(){
  let camps = this.state.campgrounds.map(camp =>{
  let path = `/camp/${camp.yelp_id}`
    return(
    <div>
      <UserCampTile
         key={camp.id}
         id={camp.id}
         path={path}
         name={camp.name}
         state={camp.state}
         rating={camp.rating}
      />
    </div>
    )
  })

    return(
      <div>
        <div className='user-name-div'>
          <h1 className='name'> Hey {this.state.first_name}</h1>
        </div>
          <div className='my-camps-div'>
            <h1 className='my-campsites'>Your Campsites</h1>
          </div>
          <div className='grid user-grid'>
            {camps}
        </div>
      </div>
    )
   }
  }




export default ProfilePage
