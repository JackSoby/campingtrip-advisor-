import React from 'react';
import GoogleMapsTile from './GoogleMapsTile'

const CampShowTile = (props) => {
  return (
    <div className='cell show-cell'>
      {props.rating}
        <h1 className='big-name'>{props.name}</h1>
          <h3 className='message'>{props.message}</h3>
            <img className='show-image' src={props.image}/>
              <GoogleMapsTile
                lng={props.lng}
                lat={props.lat}
              />
            <h4 className='camp-state'> Address: {props.address}, {props.city}, {props.state}, {props.zip}</h4>
          {props.button}
          <h4 className='camp-state'> Phone: {props.phone}</h4>
      </div>
  );
}

export default CampShowTile;
