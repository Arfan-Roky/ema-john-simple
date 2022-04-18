import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Login.css';
import {  useLocation } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassoword] = useState('')
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassoword(event.target.value);
    }

    if(user){
        navigate(from , {replace: true})
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'> Login</h2>
            <form onSubmit={handleUserSignIn}>
            <div className="input-group">
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" name='email' onBlur={handleEmailBlur} required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">
                    Password
                </label>
                <input onBlur={handlePasswordBlur} type="password" name="password" required/>
            </div>
            <p style={{color:'red', margin:'.5rem 0'}}>
                {error?.message}
            </p>
            {
                loading && <p>Loading . . . . . . .</p>
            }


            <input className='form-submit' type="submit" value="Login" />
            </form>

            <p className='form-text'>
                New to Ema-john? <Link className='form-link' to='/sign-up'>Create an Account</Link>
            </p>
            <hr />
           </div>
        </div>
    );
};

export default Login;