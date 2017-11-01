import React, { Component } from 'react';
import CampTile from '../components/CampTile'


class ProfilePage extends Component {
  constructor(props){
    super(props)
    this.state={
     id: '',
     first_name: '',
     last_name: '',
     fullname: '',
     campgrounds: [],
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
      <CampTile
         key={camp.id}
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
      <h1 className='name'> Hello, {this.state.fullname}</h1>
      <h1 className='my-campsites'>your campsites</h1>
          {camps}
      </div>
    )
   }
  }




export default ProfilePage
