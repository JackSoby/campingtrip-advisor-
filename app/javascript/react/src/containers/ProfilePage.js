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
     lng:  86.9250,
     lat: 27.9878
    }
      this.initMap=this.initMap.bind(this)
      this.handleCoordniates=this.handleCoordniates.bind(this)
      this.buildMap=this.buildMap.bind(this)
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
    this.buildMap()
  }

  buildMap(){
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDXs__DvSrweKmRBGuM9m0R40EvO9FkQEg&callback=initMap')
  }

  initMap() {
    let lat = parseFloat(this.state.lat)
    let lng = parseFloat(this.state.lng)
    let map = new google.maps.Map(document.getElementById('user-map'), {
      zoom: 12,
      center: {lat: lat, lng: lng}
    });
    let marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
    });
  }
handleCoordniates(event){
  event.preventDefault()
    let lng=event.target.value
    let lat=event.target.name
    this.setState({lng: lng, lat: lat})
    this.buildMap()
}
  render(){
    let mapName;
    if (this.state.lng === null && this.state.lat === null){
      mapName='hidden-map'
    }else{
      mapName='user-map'
    }
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
           handleCoordniates={this.handleCoordniates}
           lng={camp.lng}
           lat={camp.lat}
        />
      </div>
      )
    })

    return(
      <div>
        <div className='user-name-div'>
          <h1 className='name'> Hey {this.state.first_name}</h1>
        </div>
        <div className="row">
          <div className='column large-6'>
          <div className='my-camps-div'>
          <h2 className='my-campsites'>Your Campsites</h2>
          </div>
            <div className='user-grid'>
              {camps}
            </div>
          </div>
          <div className="column large-6" id="user-map">
          </div>
        </div>
      </div>
    )
   }
  }




export default ProfilePage
function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}
