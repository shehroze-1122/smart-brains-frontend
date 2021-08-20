import React from 'react';
import { Link } from 'react-router-dom';

const NavigationHome = () => {
    return (
        <div>
            <Link to="/">
                <p className="tr f3 fw2 link dim  white ma3 pa3 mt3 pointer fr cf w-50">Sign Out<i className="fa fa-sign-out pl3" aria-hidden="true"></i></p>
            </Link>        
        </div>
    )
}

export default NavigationHome;