import React, { Fragment, useCallback} from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
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

const particlesOptions = {
  fps_limit: 60,
  interactivity: {
  detect_on: "canvas",
  events: {
    onclick: { enable: true, mode: "push" },
    onhover: {
      enable: true,
      mode: "attract",
      parallax: { enable: false, force: 60, smooth: 10 }
    },
    resize: true
  },
  modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5
    }
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: ""
  },
  retina_detect: true
}

const App = ()=> {

  const particlesInit = useCallback(async (engine) => {    
    await loadFull(engine);
}, []);

  return (
    <div>
      <Particles className="background-particles" init={particlesInit} options={particlesOptions} /> 
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
