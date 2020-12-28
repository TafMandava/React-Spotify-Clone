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

  //const [token, setToken] = useState(null);
  /*
      Grabbing information from the data layer and insert it into this object
      If l need the user l would say go get the user using const [{ user }, dispatch]
      If l need the token l would say go get the user using const [{ token }, dispatch]
      If l need both the user and token l would say go get the user and token using const [{ user, token }, dispatch]
      If you do not need anything so we are going to leave it blank const [{}, dispatch]
      The second argument is called the dispatch which is more like a gun and we get this gun to shoot at the data layer with values to change and update values
      We need the disptch to do that
      Get or pull the user from the data layer
      Destructing to only get the use
       const [{ user }, dispatch] = useDataLayerValue(); is similar to :
           const [dataLayer, dispatch] = = useDataLayerValue();
           dataLayer.user;
      To test this login with spotify
  */
 const [{ user, token}, dispatch] = useDataLayerValue();

  /*
      Run code based on a given condition
      Use useEffect to keep an eye on the window location
  */
  useEffect(() => {
     const hash = getTokenFromUrl();
     /* 
        We do not want the access token to sit in the url.  Clear the access token. Strip the token from the url 
     */
     window.location.hash = '';
     const _token = hash['access_token'];

     if (_token) {
      /* 
        Store token inside of memory
        Use the token to connect to Spotify and do some cool staff with it
      */
      //setToken(_token);

      /*
          Rather than setting a token here we are going to create a dispatch 
          Go to the reducer and add a case that listens to SET_TOKEN
      */
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });
      

      /*
        Connect Spotify to React
        Giving the access token to the API
        Here is your token that will allow you to talk inbetween the App and Spotify Services
      */
      spotify.setAccessToken(_token);

      /*
        Get the user's account
        This returns a promise
        Pop the user into the data layer
        Pull the user from the datalayer and read it
      */
      spotify.getMe().then(user => {
      //console.log("User >>> ", user);
        /*
            An easier State Management API that you can learn is Recoil
            Dispatch and action
            The action is an object
            Action has a type and payload (In the Reducer we user action.user)
            This will dipatch the user at this point
            To test if the user is being stored use const [{ user }, dispatch] = useDataLayerValue(); to pull th user from the data layer
            Write to the console log before the return statement
            Sh  oot into the data layer
        */
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
      
      /*
          Get a user's playlists
          A call to the API which gives us  playlist
          This returns a promise (playlist for the user)
          Dispatch the playlists to the data layer
          Do not forget to go and listen to the action in the Requcer
      */
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists
        });
       });   

      /* 
          Search playlists whose name or description contains 'House Music'
      */
      spotify.searchPlaylists('House Music').then((house_music_playlist) => {
        dispatch({
            type: 'SET_HOUSE_MUSIC_PLAYLIST',
            house_music_playlist: house_music_playlist
        });
       });

      /* 
          Search tracks whose name, album or artist contains 'Afterglow' 
      */
     console.log('Search tracks whose name, album or artist contains Afterglow');
      spotify.searchTracks('Afterglow').then((afterglow_search) => {
        dispatch({
            type: 'SET_AFTERGLOW_SEARCH',
            afterglow_search: afterglow_search
        });
       });

     }
     

     //console.log("Token >>> ", token);

  }, []);

  /*
      Sanity check
      Check if we can get the token from the data layer
      Printing out the token from the data layer
  */
  console.log("Token >>> ", token);

  /*
      Sanity check
      Check if we can get the user from the data layer
      Printing out the user from the data layer
  */
  console.log("User >>> ", user);

  return ( 
    /*
        BEM naming convection
    */
    <div className="app">
      {/*JSX - If there is a token render the Player else render the Login*/}
      {
        token ? (
          /*
              Passing the spotify object to the player as a Prop 
              This is an example on how we pass the object directly to a component rather than using the data layer or creating a dispatch that shoots the object into the data layer
          */
          <Player spotify={spotify} />
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
