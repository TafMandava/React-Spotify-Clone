import React, { useEffect, useState } from 'react';
import Player from './Player';
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
import { useDataLayerValue } from './DataLayer';

/*
    Create an instance of spotify that will allow us to communicate with spotify
*/
const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  /*
      Grabbing information from the data layer
  */

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
      /*
        Connect Spotify to React
        Giving the access token to the API
        Here is your token that will allow you to talk inbetween the App and Spotify Services
      */
      spotify.setAccessToken(_token);

      /*
        Get the user's account
        This returns a promise
      */
      spotify.getMe().then(user => {
        console.log("User >>> ", user);
      });

     }

     console.log("Token >>> ", token);
  }, [token]);

  return ( 
    /*
        BEM naming convection
    */
    <div className="app">
      {/*JSX - If there is a token render the Player else render the Login*/}
      {
        token ? (
          <Player />
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
