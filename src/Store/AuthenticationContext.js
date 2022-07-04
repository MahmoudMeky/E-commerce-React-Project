import React from "react"

const AuthContext=React.createContext({
    state:false,
    setState:function(){}
})

export default AuthContext;