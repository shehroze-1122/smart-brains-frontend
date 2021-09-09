import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        id: '',
        name: '',
        email: '',
        joined: '',
        entries: 0
      });

    return(
        <AuthContext.Provider value={{isAuthenticated: isAuthenticated, setIsAuthenticated: setIsAuthenticated, currentUser:currentUser, setCurrentUser:setCurrentUser}}>
            {props.children}
        </AuthContext.Provider>
    )

}