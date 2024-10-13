"use client";

import { useState } from 'react';
import { supabase } from '../supabaseClient';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setErrorMessage(error.message);
    } else {
      alert('Sign up successful!');
    }
  };

  const handleGoogleSignUp = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) {
      setErrorMessage(error.message);
    } else{
      alert('Signed Up Successfuly');
    }
  };

  return (
    <div className="container container-1">
      <h1>Sign Up</h1>
      <input className='input input-1'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input className='input input-2'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignUp} className="button button-2">Sign Up</button>
      <br />
      <button onClick={handleGoogleSignUp} className="button button-1">Sign Up with Google</button>
      <br />
      <a href="/login" className='text-1'>Already Have an Account</a>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SignUp;
