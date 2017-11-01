import React from 'react';

const NoteTitleField = (props) => {
  return (
    <label onChange={props.handleChange}><p>{props.label}</p>
      <input
        className='search-bar2'
        placeholder='Notes'
        name={props.name}
        type='text'
        value={props.content}
      />
      <input onClick={props.handleSubmit} className="button button1" type="submit" value="Submit" />
    </label>
  );
}

export default NoteTitleField;
