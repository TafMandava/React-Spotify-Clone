/*
    Refer to React documentation
*/
import React, {createContext, useContext, useReducer} from 'react';

/*
    Preparing the Data Layer for what's about to come
*/
export const DataLayerContext = createContext(); 

/* 
    This is the actual data layer and it wraps the App
    The DataLayer takes an initialState, Reducer and children
    A child is wrapped inside the DataLayer i.e. <App />
*/
export const DataLayer = ({ initialState, reducer, children }) => (
    /* 
        Wrap whatever children they are 
        Pass the value of the provider
        The reducer and initialState are passed in as Props
        Wrap whatever the children are
    */
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

/*
   Anytime l want to get either a value into the data layer or if l want to dispatch an action into it, l need to find a way of getting access into it
*/
export const useDataLayerValue = () => useContext(DataLayerContext);