import React from 'react';

const CampShowTile = (props) => {
  return (
      <div className='cell show-cell'>
        {props.rating}
        <h1 className='big-name'>{props.name}</h1>
        <h3>{props.message}</h3>
        <img className='show-image' src={props.image}/>
        <h4 className='camp-state'> Address: {props.address}, {props.city}, {props.state}, {props.zip}</h4>
        {props.button}
        <h4 className='camp-state'> Phone: {props.phone}</h4>
      </div>
  );
}

export default CampShowTile;
