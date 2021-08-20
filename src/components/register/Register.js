import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
    return (
        <article className="center ba dark-gray b--black-10 mt4 w-100 w-50-m w-25-l mw13 br3 db shadow-3 cf">
            <main className="pa4 black-80  ">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
                    <div className="mt3">
                        <label className="db fw3 lh-copy f4" htmlFor="name">Full Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                    </div>
                    <div className="mt3">
                        <label className="db fw3 lh-copy f4" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw3 lh-copy f4" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="tc">
                    <Link to="/home">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Register" />
                    </Link>
                    </div>
                </div>
            </main>
        </article>
    )
}
export default Register;