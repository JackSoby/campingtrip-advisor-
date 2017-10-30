import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import CampTile from '../components/CampTile'




class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      camps: [],
      errorMessage:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handlePost=this.handlePost.bind(this)
  }


  handlePost(formPayload){
   fetch('/api/v1/pages', {
    credentials: 'same-origin',
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(formPayload)
   })
    .then(response =>  response.json())
    .then(body =>{
       this.setState({ camps: body})
     })
  }

handleSubmit(event) {
  event.preventDefault();
  let formPayload = {
    name: this.state.userInput
 };
  this.handlePost(formPayload);
}

  handleChange(event){
    console.log(this.state.userInput)
    let value=event.target.value
    let name=event.target.name
    this.setState({[name]: value})
  }


render(){
let camps = this.state.camps.map(camp =>{
  return(
    <CampTile
       key={camp.id}
       name={camp.name}
       address={camp.location.address1}
       country={camp.location.country}
       state={camp.location.state}
       city={camp.location.city}
       zip={camp.location.zip_code}
       phone={camp.display_phone}
       rating={camp.rating}
    />
  )
})

  return(
    <div>
    <form className="search-bar1" onSubmit={this.handleSubmit}>
          <TitleField
            content={this.state.userInput}
            label="Please Enter a State"
            name="userInput"
            handleChange={this.handleChange}
          />
        <div className="button-group">
            <input className="button" type="submit" value="Submit" />
        </div>
    </form>
     {camps}
    </div>

  )
 }
}




export default Form;
