import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationSignIn = () => {
    const route = useLocation();
    return (
        <div className="w-100">
            <div className="fr w-15">
            <Link to="/">
            <p className={`tr f3 fw2 link dim  white ma3 pa3 mt3 fr pointer ${route.pathname==='/'?'active': null}`}>Sign In <i className="fas fa-sign-in-alt"></i></p>
            </Link>
            </div>
            <div className="fr w-850">
            <Link to="/register" className="di">
                <p className={`tr f3 fw2 link dim  white ma3 pa3 fr mt3 pointer ${route.pathname==='/register'?'active': null}`}>Register <i className="fas fa-user-plus"></i></p>
            </Link>   
            </div>      
        </div>
    )
}

export default NavigationSignIn;