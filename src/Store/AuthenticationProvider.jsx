import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AuthenticationContext from "./AuthenticationContext";



export default function AuthProvider(props) {
    
    let defaultState=false;

    if(localStorage.loggedIn){
        defaultState=JSON.parse(localStorage.loggedIn)
    }
    
    const [authenticationState, setAuthenticationState] = useState(defaultState);


    let Authentication = {
        state: authenticationState,
        setState: setAuthenticationState
    }

    useEffect(() => {
            localStorage.setItem("loggedIn", authenticationState)
    }, [authenticationState])

    return (

        <AuthenticationContext.Provider value={Authentication}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}
