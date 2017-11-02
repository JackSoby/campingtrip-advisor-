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
    <label onChange={props.handleChange}><p>{props.label}</p>
        <input
          className={className}
          placeholder='Notes'
          name={props.name}
          type='text'
          value={props.content}
        />
      <input onClick={props.handleSubmit} className="button button1" type="submit" value="Submit" />
      <button onClick={props.handleEditSubmit} className={editButton} type="submit" >Edit</button>
    </label>
  );
}

export default NoteTitleField;
