import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  doSigninAsync,
  logout,
  authenticationSelector,
} from "./authenticationSlice";
import { Link } from 'react-router-dom'

const Authentication = () => {
  const dispatch = useDispatch();

  const auth = useSelector(authenticationSelector);
  // const email = auth.email;
  const userName = auth.userName;
  const token = auth.token;
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="myLogin">
      { token ?<>
          <h3>loged in as: {userName}</h3>
          <button onClick={() => dispatch(logout())}>Logout</button></>
          : <> Login:{" "}
          <input type="text" value={username} placeholder="username" onChange={(e) => setusername(e.target.value)}></input>{" "}
          <input type="password" value={password} placeholder="password" onChange={(e) => setpassword(e.target.value)}></input>{" "}
          <button onClick={() => dispatch(doSigninAsync({ username: username, password: password }))}>Login</button>
          {' or '}
          <Link to='/register'>register</Link>
          </>
          }
      {/* {userName && <div>User name: {userName}</div>} */}
      {/* {email && <div> Email: {email}</div>} */}
      {/* {token && <div> token: {token}</div>} */}
    </div>
  );
};

export default Authentication;
