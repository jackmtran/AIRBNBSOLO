// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './LoginForm.css'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const demolog = () => {
    dispatch(sessionActions.login({
        credential: "Demo",
        password: 'password4'
    })).then(
        (data) => {
            if (data.user)
            return history.push('/home')
        }
    )
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }


  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <ul>
        {errors.map((error, idx) => <li className="errorformat" key={idx}>{error}</li>)}
      </ul>
      <div>
        <input className='inputs'type="text" value={credential} placeholder="Username/Email" onChange={(e) => setCredential(e.target.value)} required/>
      </div>
      <div>
        <input type="password"className='inputslast' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
      </div>
      <button className='button' type="submit">Log In</button>
      <button className='button' type="submit" onClick={demolog}>Demo</button>

    </form>
    );
}

export default LoginFormPage;
