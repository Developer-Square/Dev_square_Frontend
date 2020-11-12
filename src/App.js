import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
 
//Own Components
import Header from './components/Header'
import LandingArea from './components/LandingArea'
import AboutUs from './components/AboutUs'
import Portfolio from './components/Portfolio'
import ProductFeatures from './components/ProductFeatures'
import Client from './components/Client'
import Team from './components/Team'
import ServicesAndBlog from './components/ServicesAndBlog'
import ContactAndFooter from './components/ContactAndFooter'

function App() {
  return (
    <div className="App">
    <Header />
    <LandingArea />
    <AboutUs />
    <Portfolio />
    <ProductFeatures />
    <Client />
    <Team />
    <ServicesAndBlog />
    <ContactAndFooter />
    </div>
  );
}

export default App;
