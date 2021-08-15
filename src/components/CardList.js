import React from 'react';
import Card from './Card.js';

function CardList (props)
{
  const robots = props.robots;

  return(
    <div>
      {
        robots.map(user=>{
          return (
            <Card key={user.id}
               id={user.id}
               name={user.name}
               email={user.email}/>)})
      /* equiv to :
       robots.map(function(user){
          return (
            <Card key={user.id}
               id={user.id}
               name={user.name}
               email={user.email}/>)
          })*/
      }
    </div>
  );
}
export default CardList;
