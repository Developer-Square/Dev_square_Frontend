import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//For the progress bars in the dashboard section
import "react-sweet-progress/lib/style.css";
//For the pop up notifications
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
