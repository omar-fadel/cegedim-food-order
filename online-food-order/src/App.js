import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/index';
import NavBar from './NavigationBar/index';
import Restaurant  from './Restaurant/index';

function App() {
  return (
    <div>
      <NavBar title="--== Food Online Ordering App ==--" />
      <Home />
      <Restaurant name="Burgerizer" desc="Serves the best burger in city" rating="5" picture="https://inkbotdesign.com/wp-content/uploads/2019/03/new-burger-king-logo-design.png.webp" />
    </div>
  );
}

export default App;
