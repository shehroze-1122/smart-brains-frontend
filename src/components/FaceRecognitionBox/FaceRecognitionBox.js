import React, { useContext } from 'react';
import Tilt from 'react-parallax-tilt';
import { ImageContext } from '../../contexts/ImageContext';
import './FaceRecognitionBox.css';

const FaceRecognitionBox = () => {

        const {imageUrl, boxValues, buttonClicked, validBoundingData } = useContext(ImageContext);

        if(imageUrl && buttonClicked && validBoundingData){
            return(
                <div className="image center ma3 pa3" >
                    <div className="relative mt2">
                        <Tilt>

                            <img id="img" src={imageUrl} width="600px"  alt='' />
                        
                            {   
                                boxValues.map((faceBoxCoordinates, ind)=>{
                                    return (<div className="bounding-box" key={ind} style={{'top':faceBoxCoordinates.top_row,  'left':faceBoxCoordinates.left_col, 'right':faceBoxCoordinates.right_col, 'bottom':faceBoxCoordinates.bottom_row}}></div>)
                                })
                            }
                        </Tilt>
                    </div>
                </div> 
            ) 

        }       
        else if(buttonClicked && !validBoundingData ){
            return <p  className="tc pa3 f3">Please enter a valid Image Url</p>
        }
        else{
            return <div></div>
        }
    
}
export default FaceRecognitionBox;