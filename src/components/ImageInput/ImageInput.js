import React from 'react';
import './imageInput.css';

const ImageInput = ({handleSearchBox, handleImageSubmit, imageRef, isImageLoading}) => {
    

    return (
        <div className="tc">
            <div className="image-form f4 br3 pa3 ma2 shadow-5 center">
                <input type="search" placeholder="Enter a image url" className="ph3 pv2 w-70 br1 ba b--green" onChange={handleSearchBox} />
                <button className="ph3 grow dib link pv2 bg-green br1 ba b--green white pointer w-30" id="btn" onClick={()=>handleImageSubmit()} disabled={isImageLoading}>{isImageLoading? "Detecting... ": "Detect"}</button>
                <div ref={imageRef} ></div>
            </div>
        </div>
    )
}
export default ImageInput;