import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import CampTile from '../components/CampTile'



class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: null,
      camps: [],
      current_user: false
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handlePost=this.handlePost.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/homes`,
        {method: 'GET', redirect: 'follow',
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(body => {
      this.setState({camps: body.campgrounds, current_user: body.session})
  })
}

  handlePost(formPayload){
   fetch('/api/v1/static_pages', {
    credentials: 'same-origin',
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(formPayload)
   })
    .then(response =>  response.json())
    .then(body =>{
       this.setState({ camps: body, errorMessage: ''})
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
      let value=event.target.value
      let name=event.target.name
    this.setState({[name]: value})
  }


render(){
let welcomeMessage;
   if(this.state.current_user === true && this.state.userInput === null ){
   welcomeMessage=`Campsites near You`
} else if (this.state.current_user === true && this.state.userInput !== null) {
  welcomeMessage=`Campsites Near ${this.state.userInput}`
} else if (this.state.current_user === false && this.state.userInput!== null) {
  welcomeMessage=`Campsites Near ${this.state.userInput}`
 }


let camps = this.state.camps.map(camp =>{
  let rating;
  if (camp.rating <=1 ){
    rating =<span ><div className='camp-home-rating'></div></span>
  } else if (camp.rating <=2 ){
    rating=<span><div className='camp-home-rating'></div><div className='camp-home-rating'></div></span>
  } else if (camp.rating <=3 ){
    rating=<span><div className='camp-home-rating'></div><div className='camp-home-rating'></div><div className='camp-home-rating'></div></span>
  } else if (camp.rating <=4 ){
    rating=<span><div className='camp-home-rating'></div><div className='camp-home-rating'></div><div className='camp-home-rating'></div><div className='camp-home-rating'></div></span>
  } else if (camp.rating <=5 ){
    rating=<span><div className='camp-home-rating'></div><div className='camp-home-rating'></div><div className='camp-home-rating'></div><div className='camp-home-rating'></div><div className='camp-home-rating'></div></span>
  }
let path = `/camp/${camp.id}`
  return(
    <CampTile
       key={camp.id}
       input={this.state.userInput}
       path={path}
       name={camp.name}
       state={camp.location.state}
       rating={rating}
       image={camp.image_url}
    />
  )
})

  return(
    <div className='content'>
      <form className="search-bar1" onSubmit={this.handleSubmit}>
      <div className='search-label-div'>
      <h1 className='search-label'>Please enter a location</h1>
      </div>
          <TitleField
            content={this.state.userInput}
            name="userInput"
            handleChange={this.handleChange}
          />
          <input className="button button1" type="submit" value="Submit" />
      </form>
      <div className="search-label-div2">
        <div className='search-label-div3'><h1 className='campsites-near'>{welcomeMessage}</h1></div>
      </div>
        <h1 className='error-message'>{this.state.errorMessage}</h1>
      <div className='grid home-grid'>
        {camps}
      </div>
    </div>
  )
 }
}




export default Form;
