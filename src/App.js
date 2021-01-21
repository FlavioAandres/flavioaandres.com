import React from 'react';
import './App.css';
import Item from './Components/Item'
import Navbar from './Components/Navbar.jsx'
import ProsentationHeader from './Components/PresentationHeader.jsx'
import './colors.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ProsentationHeader/>
        
        <div className="content-blogs">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
    </div>
  );
}

export default App;
