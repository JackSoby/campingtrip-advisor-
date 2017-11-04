import React from 'react';

const CampShowTile = (props) => {


  return (

      <div className='cell show-cell'>
      <h1>{props.name}</h1>
      <h3>{props.message}</h3>
          <img className='show-image' src={props.image}/>
              <h4 className='camp-state'>Country: {props.country}</h4>
                <h4 className='camp-state'>State: {props.state}</h4>
                <h4 className='camp-state'>City: {props.city}</h4>
                <h4 className='camp-state'> Address: {props.address}</h4>
                <h4 className='camp-state'> Zip: {props.zip}</h4>
                <h4 className='camp-state'> Phone: {props.phone}</h4>
              <div>{props.button}</div>
       </div>
  );
}

export default CampShowTile;
