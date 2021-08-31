import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="ma2">
            <Tilt className="Tilt fl w-40 pa2 shadow-2 br3" options={{ max : 50 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner mt2"> <img src={brain} alt="logo"></img> </div>
            </Tilt>
        </div>
    )
}
export default Logo;