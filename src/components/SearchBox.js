import React from 'react';
import './SearchBox.css';

function SearchBox (props)
{
return (
  <div >
    <input className="searchB" type="search" placeholder="Search Your Robot !" onChange={props.searchChange}/>
  </div>
);
}
export default SearchBox;
