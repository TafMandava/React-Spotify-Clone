import React, { useEffect } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './spotify';

function App() {

  /*
      Run code based on a given condition
      Use useEffect to keep an eye on the window location
  */
  useEffect(() => {
     const hash = getTokenFromUrl();
     // We do not want the access token to sit in the url.  Clear the access token
     window.location.hash = "";
     const token = hash.access_token;
     console.log("I have token >>>", token);
  }, []);

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
