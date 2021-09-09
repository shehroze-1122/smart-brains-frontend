import React, { useState, createContext} from 'react';

export const ImageContext = createContext();

export const ImageProvider = (props)=>{

  const [searchField, setSearchField] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [boxValues, setBoxValues] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [validBoundingData, setValidBoundingData] = useState(true);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const thresholdEntries = 50;

  return(
      <ImageContext.Provider value={{
                                    searchField: searchField, 
                                    setSearchField: setSearchField,
                                    imageUrl: imageUrl,
                                    setImageUrl: setImageUrl,
                                    boxValues: boxValues,
                                    setBoxValues,
                                    buttonClicked: buttonClicked,
                                    setButtonClicked: setButtonClicked,
                                    validBoundingData: validBoundingData,
                                    setValidBoundingData: setValidBoundingData,
                                    isImageLoading: isImageLoading,
                                    setIsImageLoading: setIsImageLoading,
                                    thresholdEntries: thresholdEntries
                                    }}>

                                    {props.children}
      </ImageContext.Provider>
  )
}