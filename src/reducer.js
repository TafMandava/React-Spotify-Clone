import { AccessTimeOutlined } from "@material-ui/icons";

/*
    Responsible for making the App work the way we saw it working
*/
export const initialState = {
    user: null,
    playing: false,
    item: null,
    /*  If you do not want to constantly login the app
        Set token to 'BQBdXk-JBahehBsscWDWwsy8kPYfUpxEmGyRbmLecMkUuzoL2DodxZ7pd-wOyeN7bU2PmwieWBmgIEoANF06-jrL5xINOOt6GEMwC_zWdGiLOjQjd6K8oTOttC1JRmgBeYvnSXNFlwWd30Pt3Wcx0IHMAlJfZDqBGH6Koycs6L7SmnHU' when developing app and remove when done
        However, this should be removed when the application is production ready
    */
    token: null,
    afterglow_search: [],
    house_music_playlist: [],
    user_playlists: []
}

/*
    Reducer takes in two inputs:
        state - how it currently looks
        action - how we manipulate what the data layer looks like e.g. set the user, set what we are playing, set the item that we are currently listening to e.t.c
    The primary job of the reducer is to listen to actions. Reducers sit idle listening to actions
*/
const reducer = (state, action) => {
    console.log(action);
 
    /*
        We have a switch on something called an action type
        Push a user into that data layer    
        We dispatch something called an action
        That action has two things:
            type - e.g. one type can be SET_USER. When we are logged in, we could say dispatch an action at that point called SET_USER and say that here is a user, throw him/her into the data layer
            [payload] - Put this in brackets because this can be dynamic and we can call it whatever we want
    */
    switch(action.type) {
        /*
            When you get an action called SET_USER return a new state and this is what the new state will look like
            Actions get dispatched and actions have got two things (type and payload)
            In this case the type of the action is SET_USER and the payload is user from (action.user)
            When we login set the user to this person
            The reducer is listening and saying this is the new state
            We can have multiple cases but we should always have a default to say that if nothing happens e.g. if we dispatch an action for example saying JUMP_TAFADZWA and we are not listening to it. What we should do is just return the state by itself so that nothing changes so that it doesn't break the App
        */
        case 'SET_USER':
            return {
                /* 
                    Keep whatever is in the current state. 
                    We need this otherwise we will override our state
                */
                ...state,
                /*
                    But update the user slice
                    Initially the user slice was null
                    Update the user slice with whatever the action.user was
                */
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_USER_PLAYLISTS':
            return {
                ...state,
                user_playlists: action.user_playlists
            };
        case 'SET_AFTERGLOW_SEARCH':
            return {
                ...state,
                afterglow_search: action.afterglow_search
            };
        case 'SET_HOUSE_MUSIC_PLAYLIST':
            return {
                ...state,
                house_music_playlist: action.house_music_playlist
            };           
        default:
            return state;
    }
}

export default reducer;