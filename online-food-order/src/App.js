import React from 'react';
import './App.css';
import Home from './home/index';
import NavBar from './NavigationBar/index';
import Restaurant  from './Restaurant/index';

function App() {
  const restaurant = {name:"Burger King", 
  desc:"Serves the best burger in city", 
  rating:"5", 
  picture:"https://inkbotdesign.com/wp-content/uploads/2019/03/new-burger-king-logo-design.png.webp"};
  return (
    <div>
      <NavBar title="--== Food Online Ordering App ==--" />
      <Home />
      <Restaurant 
      restaurant= {restaurant} />
    </div>
  );
}

export default App;
