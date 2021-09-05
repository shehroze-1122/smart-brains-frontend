import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const HomeProtectedRoute = ({children, isAuthenticated, ...rest}) => {
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
