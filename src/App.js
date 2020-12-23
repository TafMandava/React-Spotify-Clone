import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './spotify';
/*
  npm install spotify-web-api-js
  A wrapper around the Spotify web API
  Spotify built an API that allows us to connect with it's services, grab music, e.t.c
  Someone created a wrapper which makes it easier use the API
*/
import SpotifyWebApi from 'spotify-web-api-js';

function App() {

  const [token, setToken] = useState(null);

  /*
      Run code based on a given condition
      Use useEffect to keep an eye on the window location
  */
  useEffect(() => {
     const hash = getTokenFromUrl();
     /* 
        We do not want the access token to sit in the url.  Clear the access token. Strip the token from the url 
     */
     window.location.hash = "";
     const _token = hash.access_token;

     if (_token) {
      /* 
        Store token inside of memory
        Use the token to connect to Spotify and do some cool staff with it
      */
      setToken(_token);
     }

     console.log("I have token >>>", token);
  }, []);

  return ( 
    /*
        BEM naming convection
    */
    <div className="app">
      {/*JSX - If there is a token render the Player else render the Login*/}
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }

      {/* Spotify Logo */}
      {/* Login with spotify button */}
    </div>
  );
}

export default App;
