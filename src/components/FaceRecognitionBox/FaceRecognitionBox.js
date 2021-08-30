import {React} from 'react'
import './FaceRecognitionBox.css'

const FaceRecognitionBox = ({imageSource, imageRef, faceBoxesCoordinates, isButtonClicked, validBoundingData}) => {


        if(imageSource && isButtonClicked && validBoundingData){
            return(
                <div className="image center ma3 pa3" >
                    <div className="absolute mt2">
                        <img id="img" src={imageSource} width="600px"  alt='' />
                        {   
                            faceBoxesCoordinates.map((faceBoxCoordinates, ind)=>{
                                return (<div className="bounding-box" key={ind} style={{'top':faceBoxCoordinates.top_row,  'left':faceBoxCoordinates.left_col, 'right':faceBoxCoordinates.right_col, 'bottom':faceBoxCoordinates.bottom_row}}></div>)
                                })
                        }
                    </div>
                </div> 
            ) 

        }else if(isButtonClicked && !validBoundingData){

            return <p ref={imageRef} className="tc pa3 f3">Please enter a valid Image Url</p>
        }else{
            return <div ref={imageRef}></div>
        }
    
}
export default FaceRecognitionBox;