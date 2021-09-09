import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect, Route } from 'react-router-dom';

export const HomeProtectedRoute = ({children, ...rest}) => {

    const {isAuthenticated} = useContext(AuthContext);

    if(isAuthenticated){
        return(
            <Route {...rest}>
                <>{children}</>
            </Route>
        )
    }else{
        return <Redirect
        to={{
          pathname: "/",
        }}
      /> 
    }
}
