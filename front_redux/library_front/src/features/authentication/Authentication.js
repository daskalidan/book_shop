import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { doSigninAsync, logout, authenticationSelector } from './authenticationSlice'


const Authentication = () => {
  const dispatch = useDispatch();

  const auth = useSelector(authenticationSelector);
  const email = auth.email;
  const userName = auth.userName;
  // const token = auth.token;
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  return (
    <div className='myLogin'>
      {userName && <div>User name: {userName}</div>}
      {email && <div> Email: {email}</div>}
      {/* {token && <div> token: {token}</div>} */}
     
      <hr />
      Login: {' '}
      <input type='text' value={username} placeholder='username' onChange={(e) => setusername(e.target.value)}></input>{' '}
      <input type='password' value={password} placeholder='password' onChange={(e) => setpassword(e.target.value)}></input>{' '}
      <button onClick={() => dispatch(doSigninAsync({ 'username': username, 'password': password }))}>Login</button>{' '}
      <button onClick={() => dispatch(logout())}>Logout</button>
     
    </div>
  )
}

export default Authentication