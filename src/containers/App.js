import React , {useState,useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import './App.css'

function App()
{
  let [state,setState]=useState({initArray : [] ,robots: [],searchField : ''});

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      response.json().then(users => {
        setState({initArray:users, robots:Array.from(users), searchField : ''}) ;
      } );
    });
  },[]);

  function onSearchChange (event)
  {
    const save = Array.from(state.initArray);
    console.log(save);
    const aSearchField=event.target.value;
    setState({
      initArray:save,
      robots: state.initArray.filter(robot =>robot.name.toLocaleLowerCase().includes(aSearchField.toLowerCase())),
      searchField:aSearchField});
    }

  if (state.initArray.length===0)
  {
    return (
     <h1>Loading ... </h1>
    )
  }
  else
  {
    return (
      <div className="main">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={state.robots}/>
        </Scroll>
      </div>
    );
  }


}
export default App;
