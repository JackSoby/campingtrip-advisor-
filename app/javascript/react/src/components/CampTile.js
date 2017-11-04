import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'

const CampTile = (props) => {
  return (
    <div className='cell'>
      <NavLink to={props.path}>
        <img src={props.image} className='yelp-image'/>
        <ul>
          <p className='camp-text'>{props.name}</p>
          <p className='camp-text'>Rating: {props.rating}</p>
          <p className='camp-text'>State: {props.state}</p>
        </ul>
      </NavLink>
    </div>
  );
}

export default CampTile;
