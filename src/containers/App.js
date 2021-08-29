import React, { useState, useRef, Fragment} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import 'tachyons';
import NavigationHome from '../components/Navigation/NavigationHome';
import NavigationSignIn from '../components/Navigation/NavigationSignIn';
import { HomeProtectedRoute } from '../components/HomeProtectedRoute/HomeProtectedRoute';
import Logo from '../components/Logo/Logo';
import Header from '../components/Header/Header';
import UserInfo from '../components/UserInfo/UserInfo';
import ImageInput from '../components/ImageInput/ImageInput';
import FaceRecognitionBox from '../components/FaceRecognitionBox/FaceRecognitionBox';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/register/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


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


const useScroll = () => {
  const elRef = useRef(null);
  const executeScroll = () => elRef.current.scrollIntoView();

  return [executeScroll, elRef];
};


const App = ()=> {

  const [searchField, setSearchField] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [boxValues, setBoxValues] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: '',
    name: '',
    email: '',
    joined: '',
    entries: 0
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);


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
    if(searchField !==''){
      setImageUrl(searchField);
      fetch('https://afternoon-hollows-86751.herokuapp.com/imageUrl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( {
          url: searchField
        }) 
      })
      .then(data=>data.json())
      .then(response =>{
      calculateImageCoordinates(response);
      })
      .catch(err=> console.log("Error", err));

      fetch('https://afternoon-hollows-86751.herokuapp.com/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( {
          id: currentUser.id
        }) 
      })
      .then(response=>response.json())
      .then(NewEntries=> setCurrentUser(Object.assign(currentUser, {entries: NewEntries})))
      .catch(err=>console.log(err))
    }
        
  }

  const loadUser = (user)=>{
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      joined: user.joined,
      entries: user.entries
    });
  }

  const handleAuthentication = (loginState)=>{
    setIsAuthenticated(loginState);

  }
  const handleSignOut = ()=>{
    setImageUrl('');
    setSearchField('');
    setButtonClicked(false);
    setBoxValues([]);

  }

  return (
    <div>
       <Particles className="background-particles" params={params}/> 

        <Router>
         <Switch>
            <Route exact path="/">
              <Fragment>
                <NavigationSignIn/>
                <SignIn loadUser={loadUser} handleAuthentication={handleAuthentication}/>
              </Fragment>
            </Route>

            <Route exact path="/register">
              <Fragment>
                <NavigationSignIn/>
                <Register loadUser={loadUser} handleAuthentication={handleAuthentication}/>
              </Fragment>
            </Route>

            <HomeProtectedRoute exact path="/home" isAuthenticated={isAuthenticated}>
                 <NavigationHome handleSignOut={handleSignOut}/>
                 <Logo/>
                 <Header/>
                 <UserInfo name={currentUser.name} entries={currentUser.entries}/>
                 <ImageInput handleSearchBox = {handleSearchBox} imageRef={elRef} handleImageSubmit={handleImageSubmit}/>
                 <FaceRecognitionBox imageSource = {imageUrl} faceBoxesCoordinates={boxValues} isButtonClicked={buttonClicked}/>
            </HomeProtectedRoute>
         </Switch>
       </Router>
       
    </div>
  );
}

export default App;
