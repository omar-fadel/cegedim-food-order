import React from 'react';
import './App.css';
import resturants from './restaurants.json';
import Navbar from './NavigationTab/Navbar';
import ResturantsList from './ResturantsList/ResturantsList';
const items = [
  'firstItem',
  'secondItem',
  'thirdItem',
  'fourthItem'
]

function App() {
  return (
    <React.Fragment>
      <Navbar items = {items}/>
      <div style={{margin:'30px'}}>
        <ResturantsList resturants={resturants}/>
      </div>
    </React.Fragment>
  );
}

export default App;
