import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import NoteTitleField from './NoteTitleField'
import GoogleMapsTile from './GoogleMapsTile'


class UserCampTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      notes: [],
      errorMessage:'',
      delete: '',
      edit: false,
      targetedId: ``,
      noteTile: false,

    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handlePost=this.handlePost.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.handleDestroy=this.handleDestroy.bind(this)
    this.handleEdit=this.handleEdit.bind(this)
    this.handleEditSubmit=this.handleEditSubmit.bind(this)
    this.handleFormClear=this.handleFormClear.bind(this)

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
      debugger
      this.setState({notes: body})
    })
  }


  handleFormClear(){
   this.setState({
      userInput: ''
      })
    }

handlePost(formPayload){
   fetch(`/api/v1/notes`, {
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
      campground_id: this.props.id
   };
    if(this.state.userInput===''){
      this.setState({errorMessage: 'Please Enter a Valid Input'})
    }else{
    this.handlePost(formPayload);
    this.handleFormClear()
  }
}


  handleChange(event){
    console.log(this.state.userInput)
    let value=event.target.value
    let name=event.target.name
    this.setState({[name]: value})
  }

handleDestroy(deletePayLoad){
  fetch(`/api/v1/notes/${this.props.id}`, {
  credentials: 'same-origin',
  method: 'delete',
  headers: {"Content-Type": 'application/json'},
  body: JSON.stringify(deletePayLoad)
  })
  .then(response =>  response.json())
  .then(body =>{
      this.setState({notes: body})
  })
}


  handleDelete(event){
    event.preventDefault();
      let value=event.target.value
      let deletePayLoad={
        text: value,
        id: this.props.id
      }
     this.handleDestroy(deletePayLoad)
  }

  handleEdit(event){
    event.preventDefault();
    let value=event.target.value
    let id = event.target.name
      this.setState({userInput: value, edit: true, targetedId: id, noteTile: true})
  }


handleEditFetch(editPayLoad){
  fetch(`/api/v1/notes/${this.props.id}`, {
  credentials: 'same-origin',
  method: 'PATCH',
  headers: {"Content-Type": 'application/json'},
  body: JSON.stringify(editPayLoad)
 })
.then(response =>  response.json())
  .then(body =>{
      this.setState({notes: body, edit: false, targetedId:''})
  })

}
  handleEditSubmit(event){
    event.preventDefault();
    let editPayLoad={
      note_text: this.state.userInput,
      note_id: this.state.targetedId
    }
   this.handleEditFetch(editPayLoad)
   this.handleFormClear()
  }

  render(){
    let notes = this.state.notes.map(note =>{
      let className = (note.id.toString() === this.state.targetedId) ? 'red-note-tile' : null
      return(
      <div id='note-tile'className={className}>{note.text}<button className="note-button" value={note.text} onClick={this.handleDelete}>Delete</button><button value={note.text}  className='note-button' name={note.id} onClick={this.handleEdit} >Edit</button></div>
      )
    })


  return (
    <div className='dropdown'>
      <div className='user-camp-tile'>
        <NavLink className='campsite-name' to={this.props.path}>
          {this.props.name}
        </NavLink>
      </div>
      <div className='notes'>
        <NoteTitleField
          lat={this.props.lat}
          lng={this.props.lng}
          handleCoordniates={this.props.handleCoordniates}
          editButton={this.state.edit}
          handleSubmit={this.handleSubmit}
          handleEditSubmit={this.handleEditSubmit}
          content={this.state.userInput}
          label="Enter Notes Here"
          name="userInput"
          handleChange={this.handleChange}
        />
        <p>{notes}</p>
      </div>
    </div>
  );
 }
}

export default UserCampTile;
