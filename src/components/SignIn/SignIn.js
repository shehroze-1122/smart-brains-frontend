import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './signin.css';

const SignIn = ({loadUser, handleAuthentication}) => {
    const history = useHistory();
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signInError, setSignInError ] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    
    const signInSubmit = () =>{
        if(signInEmail && signInPassword){
            setIsLoading(true);
            fetch('https://afternoon-hollows-86751.herokuapp.com/signin',{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
        .then(response =>response.json())
        .then(data => {
            if(data !== "failed"){
                handleAuthentication(true);
                loadUser(data);
                setIsLoading(false);
                history.push("/home");
                
            }else{
                setIsLoading(false);
                setSignInError(true);
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
        <article className="center ba dark-gray b--black-10 mt4 w-100 w-50-m w-25-l mw13 br3 db shadow-3 cf">
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
                    {signInError? <p className='db fw3 lh-copy f5 pt0 mt0 white'>Wrong email or password</p>:null}
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
