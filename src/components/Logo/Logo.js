import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="fl ma2">
            <Tilt className="Tilt ft pa2 shadow-2 br3" style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner mt2"> <img src={brain} alt="logo"></img> </div>
            </Tilt>
        </div>
    )
}
export default Logo;