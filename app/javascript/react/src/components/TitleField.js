import React from 'react';

const TitleField = (props) => {
  return (
    <label onChange={props.handleChange}><h3 className='search-label'>{props.label}</h3>
      <input
        className='search-bar2'
        placeholder='State'
        name={props.name}
        type='text'
        value={props.content}
      />
    </label>
  );
}

export default TitleField;
