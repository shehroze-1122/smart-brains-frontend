import React, { useRef, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ImageContext } from '../../contexts/ImageContext';
import './imageInput.css';

const ImageInput = () => {

    const useScroll = () => {
        const elRef = useRef(null);
        const executeScroll = () => elRef.current.scrollIntoView();
      
        return [executeScroll, elRef];
      };
    
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const {searchField, setSearchField, setImageUrl, setBoxValues, setButtonClicked, setValidBoundingData, isImageLoading, setIsImageLoading, thresholdEntries} = useContext(ImageContext);
    const [executeScroll, elRef] = useScroll();

    const handleSearchBox = (event) =>{
        setSearchField(event.target.value);
      }
    
    const calculateImageCoordinates = (response)=>{
    
        const image = document.getElementById('img');
        const width = Number(image.width);
        const height = Number(image.height);
    
        const regions = response.outputs[0].data.regions;
        const boundingBoxes = regions.map((region)=>region.region_info.bounding_box);
    
        boundingBoxes.forEach((boundingBox)=>{
          boundingBox.top_row = boundingBox.top_row*height;
          boundingBox.left_col = boundingBox.left_col*width;
          boundingBox.right_col = width - (boundingBox.right_col*width);
          boundingBox.bottom_row = height - (boundingBox.bottom_row*height);
        })
       
        executeScroll();
        setBoxValues(boundingBoxes)
      }
    
    
    
    const handleImageSubmit = () =>{
        setButtonClicked(true);
        
        if(searchField !=='' && currentUser.entries<thresholdEntries){
          setImageUrl(searchField);
          setIsImageLoading(true);
    
          fetch('https://afternoon-hollows-86751.herokuapp.com/imageUrl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( {
              url: searchField,
              id: currentUser.id
            }) 
          })
          .then(data=>data.json())
          .then(response =>{
    
            if(response.outputs){
              setValidBoundingData(true);
              calculateImageCoordinates(response);
            }
            else{
              setValidBoundingData(false);
            }
           setIsImageLoading(false);
          })
          .catch(err=> {
            console.log("Error", err)
            setValidBoundingData(false);
            setIsImageLoading(false);
          });
          
          updateEntries();
          
        }
        
        if(currentUser.entries === thresholdEntries){
          alert("You have reached your limit for number of entries");
        }
        
            
      }
    
    const updateEntries = async () =>{
    
          const resp = await fetch('https://afternoon-hollows-86751.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify( {
            id: currentUser.id
          }) 
        })
        const newEntries = await resp.json()
        setCurrentUser(Object.assign(currentUser, {entries: newEntries}))
    
      }
         

    return (
        <div className="tc">
            <div className="image-form f4 br3 pa3 ma2 mt1 shadow-5 center">
                <input type="search" placeholder="Enter a image url" className="ph3 pv2 w-70 br1 ba b--green" onChange={handleSearchBox} value={searchField} />
                <button className="ph3 grow dib link pv2 bg-green br1 ba b--green white pointer w-30" id="btn" onClick={()=>handleImageSubmit()} disabled={isImageLoading}>{isImageLoading? "Detecting... ": "Detect"}</button>
                <div ref={elRef} ></div>
            </div>
        </div>
    )
}
export default ImageInput;