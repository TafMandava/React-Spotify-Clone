import React, {createContext, useContext, useReducer} from 'react';

/*
    Preparing the Data Layer for what's about to come
*/
export const DataLayerContext = createContext(); 

/*
    The DataLayer takes an initialState, Reducer and children
    A child is wrapped inside the DataLayer i.e. <App />
*/
export const DataLayer = ({ initialState, reducer, children }) => (
    /* 
        Wrap whatever children they are 
        Pass the value of the provider
        The reducer and initialState are passed in as Props
    */
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);
