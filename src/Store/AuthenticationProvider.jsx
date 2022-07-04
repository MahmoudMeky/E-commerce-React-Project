import React from 'react'
import { useState } from 'react';
import AuthenticationContext from "./AuthenticationContext";



export default function AuthProvider(props) {

    const [authenticationState,setAuthenticationState]=useState(false);

    let Authentication={
        state:authenticationState,
        setState:setAuthenticationState
    }

    return (
        <AuthenticationContext.Provider value={Authentication}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}
