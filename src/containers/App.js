import React, { useState, useRef, Fragment} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import 'tachyons';
import NavigationHome from '../components/Navigation/NavigationHome';
import NavigationSignIn from '../components/Navigation/NavigationSignIn';
import Logo from '../components/Logo/Logo';
import Header from '../components/Header/Header';
import UserInfo from '../components/UserInfo/UserInfo';
import ImageInput from '../components/ImageInput/ImageInput';
import FaceRecognitionBox from '../components/FaceRecognitionBox/FaceRecognitionBox';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/register/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useScroll = () => {
  const elRef = useRef(null);
  const executeScroll = () => elRef.current.scrollIntoView();

  return [executeScroll, elRef];
};


 const clarifai = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API_KEY
});



const params = {
  particles: {
    number: {
      value:100,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}



const App = ()=> {

  const [searchField, setSearchField] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [executeScroll, elRef] = useScroll();
  const [boxValues, setBoxValues] = useState([]);

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

    setBoxValues(boundingBoxes)
  }


  const handleImageSubmit = () =>{
    executeScroll();
    setImageUrl(searchField);
    clarifai.models.predict(Clarifai.FACE_DETECT_MODEL, searchField)
   .then(response =>calculateImageCoordinates(response))
   .catch(err=> console.log("Error", err));
  }


  return (
    <div>
       <Particles className="background-particles" params={params}/> 

        <Router>
         <Switch>
            <Route exact path="/">
              <Fragment>
                <NavigationSignIn/>
                <SignIn/>
              </Fragment>
            </Route>

            <Route exact path="/register">
              <Fragment>
                <NavigationSignIn/>
                <Register/>
              </Fragment>
            </Route>

            <Route exact path="/home">
              <Fragment>
                 <NavigationHome/>
                 <Logo/>
                 <Header/>
                 <UserInfo/>
                 <ImageInput handleSearchBox = {handleSearchBox} handleImageSubmit={handleImageSubmit}/>
                 <FaceRecognitionBox imageSource = {imageUrl} imageRef={elRef} faceBoxesCoordinates={boxValues}/>

              </Fragment>
            </Route>
         </Switch>
       </Router>
       {/* {route==='signin'? <SignIn handleRoute={handleRoute}/>:(null)} */}
       
    </div>
  );
}

export default App;
