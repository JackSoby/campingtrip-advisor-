import React from 'react';

const NoteTitleField = (props) => {
  let editButton;
  let className;

  if (props.editButton === true){
      editButton = 'visible'
      className= 'edit-note'
    } else {
      editButton = 'invisible'
      className= 'note-tile'
  }

  return (
    <label onChange={props.handleChange}><h5 className='note-entry-label'>{props.label}</h5>
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
