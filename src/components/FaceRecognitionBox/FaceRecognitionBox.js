import {React} from 'react'
import './FaceRecognitionBox.css'

const FaceRecognitionBox = ({imageSource, imageRef, faceBoxesCoordinates}) => {

    return (
        <div className="image center ma3 pa3" ref={imageRef}>
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
}
export default FaceRecognitionBox;