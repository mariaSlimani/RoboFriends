import React from 'react';
import './Scroll.css';

function Scroll (props)
{
  return (
    <div id="scroll">
    {
      props.children
    }
    </div>
  );
}

export default Scroll;
