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
import Restaurant  from './Restaurant/index';

function App() {
  const restaurant = {name:"Burger King", 
  desc:"Serves the best burger in city", 
  rating:"5", 
  picture:"https://inkbotdesign.com/wp-content/uploads/2019/03/new-burger-king-logo-design.png.webp"};
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
