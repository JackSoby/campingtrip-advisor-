import React from 'react';

const CampTile = (props) => {
  return (
     <div className='camp-tile'>
      <li>Name: {props.name}</li>
      <li>Rating: {props.rating}</li>
      <li>Country: {props.Country}</li>
      <li>State: {props.state}</li>
      <li>City: {props.city}</li>
      <li>Address: {props.address}</li>
      <li>Zip: {props.zip}</li>
      <li>Phone: {props.phone}</li>
    </div>
  );
}

export default CampTile;
