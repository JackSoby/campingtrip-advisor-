import React from 'react';

const NoteTitleField = (props) => {
  let editButton;
  let className;
  if (props.editButton === true){
      editButton = 'visible'
      className= 'edit-note'
    } else {
      editButton='invisible'
      className='note-tile'
  }

  return (
    <label onChange={props.handleChange} className='note-field'>
    <button onClick={props.handleCoordniates} className="button note-submit-button" type="submit" name={props.lat} value={props.lng}>Show On Map</button>
      <h5 className='note-entry-label'>{props.label}</h5>
      <input
        className={className}
        placeholder='Notes'
        name={props.name}
        type='text'
        value={props.content}
      />
      <input onClick={props.handleSubmit} className="button note-submit-button" type="submit" value="Submit" />
      <button onClick={props.handleEditSubmit} className={editButton} type="submit" >Edit</button>
    </label>
  );
}

export default NoteTitleField;
