import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AuthenticationContext from "./AuthenticationContext";
import AuthFromServer from "../Auth/auth.js";

export default function AuthProvider(props) {
    let [tokenValid, setTokenValid] = useState(false);

    async function checkToken() {
        let tokenStatus = await AuthFromServer();
        setTokenValid(tokenStatus.data);
        
    }


    useEffect(() => {
        checkToken();
        setAuthenticationState(tokenValid)
    }, [tokenValid]);




    const [authenticationState, setAuthenticationState] = useState(tokenValid);

    let Authentication = {
        state: authenticationState,
        setState: setAuthenticationState,
    };


    return (
        <AuthenticationContext.Provider value={Authentication}>
            {props.children}
        </AuthenticationContext.Provider>
    );
}
