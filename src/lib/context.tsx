import React, { createContext, useReducer } from "react";
import { AppProviderProps, actionTypes } from "./typesInterfaces";
import { appReducer } from "./reducer";
import { initialState } from "./intialstates";

export const AppContext = createContext<{state : typeof initialState; dispatch : React.Dispatch<actionTypes>}>({
     state : initialState,    
     dispatch : () => null
})


export const AppProvider = ({children} : AppProviderProps ) => {

     const [ state, dispatch ] = useReducer(appReducer, initialState)

     return (

          <AppContext.Provider value={{ state, dispatch }}>
               {children}
          </AppContext.Provider>
     )
}