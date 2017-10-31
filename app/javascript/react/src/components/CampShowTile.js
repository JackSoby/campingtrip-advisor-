import React from 'react';

const CampShowTile = (props) => {


  return (
     <div className='camp-tile'>
      <li>Name: {props.name}</li>
      <li>Address: {props.address}</li>
      <li>Rating: {props.rating}</li>
      <li>Country: {props.country}</li>
      <li>State: {props.state}</li>
      <li>City: {props.city}</li>
      <li>Zip: {props.zip}</li>
      <li>Phone: {props.phone}</li>
    </div>
  );
}

export default CampShowTile;
