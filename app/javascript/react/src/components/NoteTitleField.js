import React from 'react';

const NoteTitleField = (props) => {
  let editButton;
  let className;
  let submitClass
  if (props.editButton === true){
      editButton = "visible"
      submitClass='invisible'
    } else {
      editButton='invisible'
      className='note-tile'
      submitClass="button note-submit-button"
  }

  return (
    <div>
    <button onClick={props.handleCoordniates} className="map-button" type="submit" id='dani'name={props.lat} value={props.lng}>Map</button>
      <label onChange={props.handleChange} className='note-field'>
          <h5 className='note-entry-label'>{props.label}</h5>
            <input
              className={className}
              placeholder='Notes'
              name={props.name}
              type='text'
              value={props.content}
            />
          <input onClick={props.handleSubmit} className={submitClass} type="submit" value="Submit" />
          <button onClick={props.handleEditSubmit} className={editButton} type="submit" >Edit</button>
      </label>
    </div>
  );
}

export default NoteTitleField;
