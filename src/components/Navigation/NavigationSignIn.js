import React from 'react';
import { Link } from 'react-router-dom';

const NavigationSignIn = () => {
    return (
        <div className="w-100">
            <div className="fr w-15">
            <Link to="/">
            <p className="tr f3 fw2 link dim  white ma3 pa3 mt3 fr pointer ">Sign In</p>
            </Link>
            </div>
            <div className="fr w-850">
            <Link to="/register" className="di">
                <p className="tr f3 fw2 link dim  white ma3 pa3 fr mt3 pointer">Register</p>
            </Link>   
            </div>      
        </div>
    )
}

export default NavigationSignIn;