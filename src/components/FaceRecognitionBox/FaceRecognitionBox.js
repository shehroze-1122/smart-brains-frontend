import React from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';
import './FaceRecognitionBox.css';

const FaceRecognitionBox = ({imageSource, faceBoxesCoordinates, isButtonClicked, validBoundingData}) => {


        if(imageSource && isButtonClicked && validBoundingData){
            return(
                <div className="image center ma3 pa3" >
                    <div className="absolute mt2">
                    {/* {isImageLoading? <div className="center mt3"> <span className="f3 db pa2 ma2">Working on it. Hang on tight!</span><CircularProgress color="secondary" /></div>:null} */}

                        <img id="img" src={imageSource} width="600px"  alt='' />
                        {   
                            faceBoxesCoordinates.map((faceBoxCoordinates, ind)=>{
                                return (<div className="bounding-box" key={ind} style={{'top':faceBoxCoordinates.top_row,  'left':faceBoxCoordinates.left_col, 'right':faceBoxCoordinates.right_col, 'bottom':faceBoxCoordinates.bottom_row}}></div>)
                                })
                        }
                    </div>
                </div> 
            ) 

        }       
        else if(isButtonClicked && !validBoundingData ){
            return <p  className="tc pa3 f3">Please enter a valid Image Url</p>
        }
        else{
            return <div></div>
        }
    
}
export default FaceRecognitionBox;