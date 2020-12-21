import React from 'react';
import Login from './Login';
import './App.css';

function App() {
  return ( 
    /*
        BEM naming convection
    */
    <div className="app">
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <Login />

    </div>
  );
}

export default App;
