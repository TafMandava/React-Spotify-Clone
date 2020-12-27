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
    You can read more about Spotify scopes at https://developer.spotify.com/documentation/general/guides/scopes/
*/
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];

/*
    Get the access token from URL
    http://localhost:3000/#access_token=BQDnh6M26A2zWQgYdlak14gnxRoBa23gPdhwVHMMfCoIpMHqCJUiIVrEhewGFlt3cXXPQPRFZa0QFyQeV-QVyDVm8u7NRVVyMmxOf46KflqOUdGhGodIYKi1L_FkAABmtK_YIChy_N-RLQbVkbD1XnevUtGUvYtQzhosfJQFZV3Zf4FD&token_type=Bearer&expires_in=3600
*/
export const getTokenFromUrl = () => {
    /*
        Pulling the access token out
        Go to the URL to the point where we have a hash # 
    */
    return window.location.hash
        .substring(1) // We are chopping the substring and getting the first substring
        .split('&')  // Split at the amber sign
        .reduce((initial, item) => {
            // #access_token=BQDnh6M26A2zWQgYdlak14gnxRoBa23gPdhwVHMMfCoIpMHqCJUiIVrEhewGFlt3cXXPQPRFZa0QFyQeV-QVyDVm8u7NRVVyMmxOf46KflqOUdGhGodIYKi1L_FkAABmtK_YIChy_N-RLQbVkbD1XnevUtGUvYtQzhosfJQFZV3Zf4FD&token_type=Bearer&expires_in=3600
            let parts = item.split('=');
            // Go into the initial value that's being returned for the access token  decode the URI Component which is basically the key BQDnh6M26A2zWQgYdlak14gnxRoBa23gPdhwVHMMfCoIpMHqCJUiIVrEhewGFlt3cXXPQPRFZa0QFyQeV-QVyDVm8u7NRVVyMmxOf46KflqOUdGhGodIYKi1L_FkAABmtK_YIChy_N-RLQbVkbD1XnevUtGUvYtQzhosfJQFZV3Zf4FD
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {}); // Get an empty object which is basically what the initial should start with
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;