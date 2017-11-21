import React, { Component } from 'react';
import CampShowTile from '../components/CampShowTile'
import 'whatwg-fetch'

class CampShow extends Component{
  constructor(props){
    super(props)
      this.state={
        name: '',
        phone: '',
        rating: '',
        address: '',
        city: '',
        country: '',
        state:'',
        zip:'',
        message: '',
        lat: null,
        lng: null,
        id: '',
        imame: '',
        signedIn: false,
    }
    this.handleCampPost=this.handleCampPost.bind(this)
    this.handleCampSubmit=this.handleCampSubmit.bind(this)
 }

componentDidMount(){
  let campParams=this.props.match.params.id
    fetch('/api/v1/show_pages', {
       credentials: 'same-origin',
       method: 'POST',
       headers: {"Content-Type": 'application/json'},
       body: JSON.stringify(campParams)
    })
     .then(response =>  response.json())
     .then(body =>{
       this.setState({ lng: body.coordinates.longitude, lat: body.coordinates.latitude, image: body.image_url, name: body.name, phone: body.display_phone, rating: body.rating, address: body.location.address1, city: body.location.city, country: body.location.country, state: body.location.state, zip: body.location.zip_code, id: body.id})
    })
    fetch(`/api/v1/members.json`,
      {method: 'GET', redirect: 'follow',
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(body => {
            this.setState({signedIn: body.signed_in})
            this.button=''
        if (this.state.signedIn === true ){
          this.button = <input onClick={this.handleCampSubmit} className="button button2" type="submit" value="Save" />
        }else{
          let button ='Sign in to save a campground.'
      }
    })
 }


 handleCampPost(formPayload){
   fetch('/api/v1/camps', {
    credentials: 'same-origin',
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(formPayload)
   })
   .then(response =>  response.json())
   .then(body =>{
    this.setState({message: body.message})
  })
 }

handleCampSubmit(event){
  event.preventDefault();
  let formPayload = {
    name: this.state.name,
    phone: this.state.phone,
    rating: this.state.rating,
    address: this.state.address,
    city: this.state.city,
    country: this.state.country,
    state: this.state.state,
    zip: this.state.zip,
    id: this.state.id,
    lng: this.state.lng,
    lat: this.state.lat
 };
  this.handleCampPost(formPayload);
}

  render(){
    let rating;
    if (this.state.rating <=1 ){
     rating =<div className='camp-rating'></div>
   } else if (this.state.rating <=2 ){
     rating=<div><div className='camp-rating'></div><div className='camp-rating'></div></div>
   } else if (this.state.rating <=3 ){
     rating=<div><div className='camp-rating'></div><div className='camp-rating'></div><div className='camp-rating'></div></div>
   } else if (this.state.rating <=4 ){
     rating=<div><div className='camp-rating'></div><div className='camp-rating'></div><div className='camp-rating'></div><div className='camp-rating'></div></div>
   } else if (this.state.rating <=5 ){
     rating=<div><div className='camp-rating'></div><div className='camp-rating'></div><div className='camp-rating'></div><div className='camp-rating'></div><div className='camp-rating'></div></div>
   }
    return(
        <div className='cell show-cell'>
          {(this.state.lat && this.state.lng) ? <CampShowTile
            lng={this.state.lng}
            lat={this.state.lat}
            handleCampSubmit={this.handleCampSubmit}
            name={this.state.name}
            image={this.state.image}
            phone={this.state.phone}
            rating={rating}
            address={this.state.address}
            city={this.state.city}
            country={this.state.country}
            state={this.state.state}
            zip={this.state.zip}
            message={this.state.message}
            button={this.button}
           /> : null}
         </div>
    )
  }
}


export default CampShow
