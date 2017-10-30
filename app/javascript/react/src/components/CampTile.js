import React from 'react';

const CampTile = (props) => {
  return (
    <div className='camp-tile'>
      <a href=''><li>Name: {props.name}</li></a>
      <li>Rating: {props.rating}</li>
      <li>State: {props.state}</li>
    </div>
  );
}

export default CampTile;
