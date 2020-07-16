import React,{ createContext, useReducer } from 'react'

var initialStoreState = false;
var initialAboutUsState = "É possível alterar este texto em configurações";

export const SettingContext = createContext();

const SettingsProvider = ({children}) => {

    const storeReducer = (state , action) => {
        switch (action.type) {
            case "SWITCH_VISIBILITY":
                return initialStoreState = action.payload;       
            default:
                return false;
        }        
    }

    const aboutUsReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_TEXT":
                return initialAboutUsState = action.payload;       
            default:
                return "";
        }  
    }
    
    const [storeState , storeDispatch] = useReducer(storeReducer, initialStoreState);
    const [aboutState , aboutDispatch] = useReducer(aboutUsReducer, initialAboutUsState);
    
    return(
        <SettingContext.Provider value={{storeState , storeDispatch, aboutState , aboutDispatch}}>
            {children}
        </SettingContext.Provider>
    )

};

export default SettingsProvider