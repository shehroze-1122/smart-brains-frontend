import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import Alert from '../Alert/Alert';
import './navigation.css'

const NavigationHome = ({handleSignOut, Alert}) => {

    const [homeLoaded, setHomeLoaded] = useState(false);

    useEffect(()=>{
        setHomeLoaded(true);
    },[])

    const route = useLocation();
    return (
        <>
        {homeLoaded? <Alert alertTitle="Success" alertMessage="Successfully signed you in!" color="success"/>: null}

        <div className="navbar fr">
            <Link to="/home" >
                <p className={`f3 fw2 link dim  white ma2 pa3 mt3 pointer ${route.pathname==='/home'? 'active':null}`}>Home<i className="fas fa-home pl3"></i></p>
            </Link>
            <Link to="/profile">
                <p className={ `f3 fw2 link dim  white ma2 pa3 mt3 pointer ${route.pathname==='/profile'? 'active':null}`}>Profile<i className="fas fa-user pl3"></i></p>
            </Link>  
            <Link to="/">
                <p className="f3 fw2 link dim  white ma2 pa3 mt3 pointer" onClick={()=>handleSignOut()}>Sign Out<i className="fa fa-sign-out pl3" aria-hidden="true"></i></p>
            </Link>          
        </div>
        </>
    )
}

export default NavigationHome;