import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'

const CampTile = (props) => {
  return (
    <div className='camp-tile'>
      <li><NavLink to={props.path}>{props.name}</NavLink></li>
      <li>Rating: {props.rating}</li>
      <li>State: {props.state}</li>
    </div>
  );
}

export default CampTile;
