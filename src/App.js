import React,{ useState } from 'react';
import { ReactDOM } from 'react';
import './App.css';

import Navbar from './components/Navbar.js'
import Sidemenu from './components/sideMenu.js';

import Content from './components/Rout.js';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div style={{display:'flex', flexDirection:'row'}}>
        <Sidemenu/>
        <Content/>
      </div>
    </div>
  );
};

export default App;

