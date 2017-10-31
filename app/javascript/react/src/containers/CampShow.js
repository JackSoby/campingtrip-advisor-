import React, { Component } from 'react';
import CampShowTile from '../components/CampShowTile'


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
      zip:''
    }
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
      this.setState({ name: body.name, phone: body.display_phone, rating: body.rating, address: body.location.address1, city: body.location.city, country: body.location.country, state: body.location.state, zip: body.location.zip_code})
    })
 }

  render(){



    return(
      <CampShowTile
        name={this.state.name}
        phone={this.state.phone}
        rating={this.state.rating}
        address={this.state.address}
        city={this.state.city}
        country={this.state.country}
        state={this.state.state}
        zip={this.state.zip}
       />
    )
  }
}


export default CampShow
