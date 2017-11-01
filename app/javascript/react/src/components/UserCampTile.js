import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import NoteTitleField from './NoteTitleField'


class UserCampTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      notes: [],
      errorMessage:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handlePost=this.handlePost.bind(this)
  }

      componentDidMount() {
        fetch('/api/v1/comments', {
         credentials: 'same-origin',
         method: 'POST',
         headers: {"Content-Type": 'application/json'},
         body: JSON.stringify(this.props.id)
       })
        .then(response => response.json())
        .then(body => {
          this.setState({notes: body})
      })
    }

  handlePost(formPayload){
   fetch('/api/v1/notes', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify(formPayload)
   })
    .then(response =>  response.json())
    .then(body =>{
      if (body === null){
        this.setState({errorMessage: "Please Fill out the Form."})
      } else {
         this.setState({ notes: [...this.state.notes, body], errorMessage: '' })
      }
    })
  }

  handleSubmit(event) {
  event.preventDefault();
    let formPayload = {
      text: this.state.userInput,
      id: this.props.id
   };
   if(this.state.userInput===''){
        this.setState({errorMessage: 'Please Enter a Valid Input', notes: []})
      }else{
    this.handlePost(formPayload);
  }
}

  handleChange(event){
    console.log(this.state.userInput)
    let value=event.target.value
    let name=event.target.name
    this.setState({[name]: value})
  }

  render(){
    let notes = this.state.notes.map(note =>{
      return(
        <li>
          {note.text}
        </li>
      )
    })


  return (
    <div className='camp-tile'>
      <li><NavLink to={this.props.path}>{this.props.name}</NavLink></li>
      <li>Rating: {this.props.rating}</li>
      <li>State: {this.props.state}</li>
        <NoteTitleField
          handleSubmit={this.handleSubmit}
          content={this.state.userInput}
          label="Enter Notes Here"
          name="userInput"
          handleChange={this.handleChange}
        />
      <p>Notes</p>
      <div>{notes}</div>
    </div>
  );
 }
}

export default UserCampTile;
