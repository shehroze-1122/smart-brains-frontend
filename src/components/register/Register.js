import {React, useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './register.css';

const Register = () => {

    const {setIsAuthenticated, setCurrentUser} = useContext(AuthContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [registerationError, setRegisterationError] = useState(false);
    const [emptyRequest, setEmptyRequest] = useState(false);
    const [isLoading, setIslLoading] = useState(false);

    const handleEmailChange = (event)=>{
        setEmail(event.target.value)

    }

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
    }

    const handleNameChange = (event)=>{
        setName(event.target.value)
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

    const registerUser = ()=>{
        if(email && password && name){
            setIslLoading(true);
            setEmptyRequest(false);
            fetch('https://afternoon-hollows-86751.herokuapp.com/register', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
             })
            })
            .then(response=>response.json())
            .then(user=>{
                if(user.id){
                    setIsAuthenticated(true);
                    loadUser(user);
                    history.push("/home");

                } else{
                    setRegisterationError(true);
                }
                setIslLoading(false);

            })
            .catch(err=>{
                console.log(err);
                setIslLoading(false);
            })

        }else{
            setEmptyRequest(true);
        }
        
    }
    return (
        <article className="center ba dark-gray b--black-10 mt4 mw13 br3 db shadow-3 cf register-form">
            <main className="pa4 black-80  ">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
                    <div className="mt3">
                        <label className="db fw3 lh-copy f4" htmlFor="name">Full Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="text" name="name"  id="name" onChange={handleNameChange}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw3 lh-copy f4" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="email" name="email-address"  id="email-address" onChange={handleEmailChange}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw3 lh-copy f4" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="password" name="password"  id="password" onChange={handlePasswordChange}/>
                    </div>
                    </fieldset>
                    {emptyRequest? <p className='db fw3 lh-copy f5 pt0 mt0 white'>Please fill out the required fields</p>:null}
                    {registerationError? <p className='db fw3 lh-copy f5 pt0 mt0 white'>This email is already registered</p>:null}
                    <div className="tc">
                        <input className="b ph3 pv2 input-reset ba black b--black bg-transparent grow pointer f5 dib" type="submit" disabled={isLoading} value={isLoading? "Registering...": "Register"} onClick={()=>registerUser()}/>
                    </div>
                </div>
            </main>
        </article>
    )
}
export default Register;
