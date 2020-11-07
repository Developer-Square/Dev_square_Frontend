import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
 
//Own Components
import Header from './components/Header'
import LandingArea from './components/LandingArea'
import AboutUs from './components/AboutUs'
function App() {
  return (
    <div className="App">
    <Header />
    <LandingArea />
    <AboutUs />
    </div>
  );
}

export default App;
