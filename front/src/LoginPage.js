import axios from 'axios'
import React from 'react'
import { SERVER_URL } from './App'
import { useState } from "react"


const LoginPage = () => {
    const [username, setusername] = useState(null);
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    
    const login = (e) => {
        let user_data = {
            username: username,
            email: email,
            password: password,
        }
        axios.post(`${SERVER_URL}token/`, user_data).then((response) => { 
            response.status === 200 ? localStorage.setItem("authTokens", response.data.access): alert('login failed') 
        }).then(console.log(localStorage.getItem("authTokens")))
    }

    // 

    return (
        <div>
            <h2>login</h2>
            {/* <input type={'text'} name={'username'} placeholder='user name' /> */}
            {/* <input type={'password'} name={'password'} placeholder='password' /> */}
            <input onChange={(e) => setusername(e.target.value)} placeholder='user name'/>
            <input onChange={(e) => setemail(e.target.value)} placeholder='email'/>
            <input onChange={(e) => setpassword(e.target.value)} placeholder='password'/>
            <button onClick={() => login()}>sign in</button>
        </div>
    )
}

export default LoginPage