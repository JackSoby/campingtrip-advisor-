import React from 'react';

const CampShowTile = (props) => {


  return (

      <div className='cell show-cell'>
      {props.message}
         <h3 className='camp-rating'>Rating: {props.rating}</h3>
          <h3 className='camp-country'>Country: {props.country}</h3>
          <h3 className='camp-state'>State: {props.state}</h3>
          <h3 className='camp-state'>City: {props.city}</h3>
          <h3 className='camp-state'> Zip: {props.zip}</h3>
          <h3 className='camp-state'> Zip: {props.zip}</h3>
          <h3 className='camp-state'> Zip: {props.zip}</h3>
          <h3 className='camp-state'> Zip: {props.zip}</h3>
          <h3 className='camp-state'> Zip: {props.zip}</h3>
          <img className='show-image' src={props.image}/>
       </div>
  );
}

export default CampShowTile;
