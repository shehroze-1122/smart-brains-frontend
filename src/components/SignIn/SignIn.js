import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import './signin.css';

const SignIn = () => {

    const {setIsAuthenticated, setCurrentUser} = useContext(AuthContext);
    const history = useHistory();
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signInError, setSignInError ] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const loadUser = (user)=>{
        setCurrentUser({
          id: user.id,
          name: user.name,
          email: user.email,
          joined: user.joined,
          entries: user.entries
        });
      }

    const signInSubmit = () =>{

        if(signInEmail && signInPassword){
            setIsLoading(true);
            fetch(`${process.env.REACT_APP_SERVER_URL}/signin`,{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
        .then(response =>response.json())
        .then(data => {
            if(data.error){
                setSignInError(data.error)
                
            }else{
                setIsAuthenticated(true);
                loadUser(data);
                setIsLoading(false);
                history.push("/home");
            }
            
        })
        .catch((err)=>{
            setIsLoading(false);
            console.log("Wrong email or password")
        })

        }
    }

    
    const handleEmail = (event)=>{
        setSignInEmail(event.target.value)

    }

    const handlePassword = (event)=>{
        setSignInPassword(event.target.value)
    }


    return (
        <article className="center ba dark-gray b--black-10 mt4 mw13 br3 db shadow-3 cf signin-form">
            <main className="pa4 black-80  ">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw3 lh-copy f4" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={handleEmail} required type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw3 lh-copy f4" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={handlePassword} required type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    {signInError && <p className='db fw3 lh-copy f5 pt0 mt0 white'>{signInError}</p>}

                    <div className="tc">
                        <input className="b ph3 pv2 input-reset ba black b--black bg-transparent grow pointer f4 dib" type="submit" value={isLoading? "Signing in...": "Sign In"} disabled={isLoading} required onClick={()=>signInSubmit()}/>
                    
                    </div>
                    <div className="lh-copy mt3 tc">
                        New here?
                        <div className="dib ph2">
                            <Link className="f4 link dim black db" to="/register">
                            Register
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </article>
    )
}
export default SignIn;
