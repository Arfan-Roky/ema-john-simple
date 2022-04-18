import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassoword(event.target.value)
    }

    if(user){
        navigate('/shop')
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleError = event => {
        setError(event.target.value)
    }



    const handleCreateUser = event => {
        event.preventDefault();

        

        if(password !== confirmPassword){
            setError('Your Two password did not match');
            return;
        }

        if(password.length < 6){
            setError('password must be 6 characters or longer')
        }
        createUserWithEmailAndPassword(email, password);
    }







    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'> Sign Up</h2>
         <form onSubmit={handleCreateUser}>
         <div className="input-group">
             <label htmlFor="email">
                 Email
             </label>
             <input onBlur={handleEmailBlur} type="email" name='email' required/>
         </div>
         <div className="input-group">
             <label htmlFor="password">
                 Password
             </label>
             <input onBlur={handlePasswordBlur} type="password" name="password" required/>
         </div>
         <div className="input-group">
             <label htmlFor="confirm-password">
                 Confirm Password
             </label>
             <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required/>
         </div>
         <p style={{color:'red', margin:'.5rem 0', }}>{error}</p>
         <input className='form-submit' type="submit" value="Sign Up" />
         </form>

         <p className='form-text'>
             Already Have An Account? <Link className='form-link' to='/login'>Login</Link>
         </p>
         <hr />
        </div>
     </div>
    );
};

export default SignUp;