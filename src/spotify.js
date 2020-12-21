/*
    Spotify Documentation
    https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

    Click Login Button
    Redirect to Spotify Login Page
    Redirect to home page once authorised or logged in
*/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "19d7c6eee7804c829e8871b7d1ef25f9";


/*
    Spotify Scopes
    Defining function or operation permissions
    %20 equals ASCI space character
*/
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;