import React from 'react';
import './Card.css';
function Card (props)
{
  return (
    <div className="cardEle">
      <img src={`https://robohash.org/${props.id}?size=200x200`} alt="Robot"/>
      <div>
        <h2>{props.name}</h2>
      <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
