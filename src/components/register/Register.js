import {React, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './register.css';

const Register = ({loadUser, handleAuthentication}) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleEmailChange = (event)=>{
        setEmail(event.target.value)

    }

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)

    }

    const handleNameChange = (event)=>{
        setName(event.target.value)
    }

    const registerUser = ()=>{
        if(email && password && name){
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
                handleAuthentication(true);
                loadUser(user);
                history.push("/home");

            } 

        })
        .catch(err=>console.log(err))

        }
        
    }
    return (
        <article className="center ba dark-gray b--black-10 mt4 w-100 w-50-m w-25-l mw13 br3 db shadow-3 cf">
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
                    <div className="tc">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Register" onClick={()=>registerUser()}/>
                    </div>
                </div>
            </main>
        </article>
    )
}
export default Register;
