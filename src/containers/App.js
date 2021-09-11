import React, { Fragment } from 'react';
import Particles from 'react-particles-js';
import NavigationHome from '../components/Navigation/NavigationHome';
import NavigationSignIn from '../components/Navigation/NavigationSignIn';
import { HomeProtectedRoute } from '../components/HomeProtectedRoute/HomeProtectedRoute';
import Logo from '../components/Logo/Logo';
import Header from '../components/Header/Header';
import UserInfo from '../components/UserInfo/UserInfo';
import ImageInput from '../components/ImageInput/ImageInput';
import FaceRecognitionBox from '../components/FaceRecognitionBox/FaceRecognitionBox';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/register/Register';
import Profile from '../components/Profile/Profile';
import Alert from '../components/Alert/Alert';
import NotFound404 from '../components/NotFound404/NotFound404';
import { AuthProvider } from '../contexts/AuthContext';
import { ImageProvider } from '../contexts/ImageContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'tachyons';

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

  return (
    <div>
      <Particles className="background-particles" params={params}/> 
      {navigator.onLine? null: <Alert alertTitle="Network Error" alertMessage="Sorry couldn't connect to the server. Please try again later" color="danger"/>}
      <AuthProvider>
      <ImageProvider>
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
              
              <HomeProtectedRoute exact path="/home">
                
                  <NavigationHome Alert={Alert}/>
                  <Logo/>
                  <Header/>
                  <UserInfo/>
                  <ImageInput/>
                  <FaceRecognitionBox />
              </HomeProtectedRoute>

              <HomeProtectedRoute exact path="/profile">  
                    <NavigationHome Alert={Alert}/>
                    <Profile Alert={Alert}/>     
              </HomeProtectedRoute>
              
              <Route path="/*">
                <NotFound404/>
              </Route> 
           </Switch>
         </Router>
         </ImageProvider>
      </AuthProvider> 
    </div>
  );
}

export default App;
