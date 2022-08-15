import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { doSignupAsync } from './authenticationSlice'


const Register = () => {
  const dispatch = useDispatch();
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [staff, setstaff] = useState(false)


  return (
    <div className='myLogin'>
      register: {' '}
      <input type='text' value={username} placeholder='username' onChange={(e) => setusername(e.target.value)}></input>{' '}
      <input type='text' value={email} placeholder='email' onChange={(e) => setemail(e.target.value)}></input>{' '}
      <input type='password' value={password} placeholder='password' onChange={(e) => setpassword(e.target.value)}></input>{' '}
      <label>staff:</label><input type='checkbox' value={staff} onChange={(e) => setstaff(e.target.value)}></input>{' '}
      <button onClick={() => dispatch(doSignupAsync({ 'username': username, 'email': email, 'password': password, 'is_staff': staff}))}>register</button>
    </div>
  )
}

export default Register