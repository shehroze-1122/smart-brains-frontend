import {React} from 'react'
import './imageInput.css'

const ImageInput = ({handleSearchBox, handleImageSubmit, imageRef}) => {
    
    const listener = event => {
        document.addEventListener("keydown", listener)
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          event.preventDefault();
          handleImageSubmit();
        }
      };
      

    return (
        <div className="tc">
            <div className="image-form f4 br3 pa3 ma3 shadow-5 center">
                <input type="search" placeholder="Enter your image url" className="ph3 pv2 w-75 br1 ba b--green" onChange={handleSearchBox} onKeyDown={listener}/>
                <button className="ph3 grow dib link pv2 bg-green br1 ba b--green white pointer w-25" onClick={handleImageSubmit} >Detect</button>
                <div ref={imageRef} ></div>
            </div>
        </div>
    )
}
export default ImageInput;