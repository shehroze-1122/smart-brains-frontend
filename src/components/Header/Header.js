import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div id="header">
            <div id="header-container" >
                <h1>SMART BRAINS</h1>   
            </div>
            <p className="f4 tc mt2 pa1">{'Smart Brain is able to detect the faces in your images. Give it a try'}</p>

        </div>

    )
}

export default Header;