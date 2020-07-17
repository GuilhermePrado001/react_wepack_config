import React,{ createContext, useReducer } from 'react'

var initialStoreState = true;
var initialAboutUsState = "É possível alterar este texto em configurações";
var initialTimeConfig =  "30";

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

    const timeConfigReducer = (state, action) => {
        switch (action.type) {
            case "TIME_CONFIG":
                return initialTimeConfig = action.payload;       
            default:
                return "";
        }  
    }
    
    const [storeState , storeDispatch] = useReducer(storeReducer, initialStoreState);
    const [aboutState , aboutDispatch] = useReducer(aboutUsReducer, initialAboutUsState);
    const [timeState , timeDispatch] = useReducer(timeConfigReducer, initialTimeConfig);
    
    return(
        <SettingContext.Provider value={{storeState , storeDispatch, aboutState , aboutDispatch, timeState , timeDispatch}}>
            {children}
        </SettingContext.Provider>
    )

};

export default SettingsProvider