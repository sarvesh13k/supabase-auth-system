"use client";

import { useState } from 'react';
import { supabase } from '../supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setErrorMessage(error.message);
    } else {
      alert('Login successful!');
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) {
      setErrorMessage(error.message);
    } else{
      alert('Logged In Successfuly');
    }
  };

  return (
    <div className="container container-1">
      <h1 className="heading">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-1"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input input-2"
      />
      <br />
      <button onClick={handleLogin} className="button button-1">Login</button><br />
      <button onClick={handleGoogleLogin} className="button button-2">Login with Google</button><br />
      <a href="/signup">Don't Have an Account? Sign Up</a>
      {errorMessage && <p>{errorMessage}</p>} 
    </div>
  );
};

export default Login;
