import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import NoteTitleField from './NoteTitleField'


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
      id: this.props.id
   };
   if(this.state.userInput===''){
        this.setState({errorMessage: 'Please Enter a Valid Input', notes: []})
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
      this.setState({notes: body, edit: false})
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
    let noteTile;
    if (this.state.noteTile === true ){
      noteTile = 'red-note-tile'
    } else {
      noteTile= 'note-tile'
    }

    let notes = this.state.notes.map(note =>{
      let className = (note.id.toString() === this.state.targetedId) ? 'red-note-tile' : null

      return(
      <li className={className}>{note.text}<button value={note.text} onClick={this.handleDelete}>Delete</button><button value={note.text} name={note.id} onClick={this.handleEdit} >Edit</button></li>
      )
    })


  return (
    <div className='camp-tile'>
      <li><NavLink to={this.props.path}>{this.props.name}</NavLink></li>
      <li>Rating: {this.props.rating}</li>
      <li>State: {this.props.state}</li>
        <NoteTitleField
          editButton={this.state.edit}
          handleSubmit={this.handleSubmit}
          handleEditSubmit={this.handleEditSubmit}
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
