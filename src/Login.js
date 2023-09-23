
import React, { useState, useEffect } from 'react';
import "./login.css"

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [collegeName, setCollegeName] = useState('');
  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect to check if the user is already logged in
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      // setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, we're just storing the username in local storage
    localStorage.setItem('username', username);
    onLogin(username);
    // setLoggedIn(true);
  };

  // const handleLogout = () => {
  //   // Clear user data from local storage
  //   localStorage.removeItem('username');
  //   setLoggedIn(false);
  // };

  // if (loggedIn) {
  //   return (
  //     <div>
  //       <h1>Welcome, {username}!</h1>
  //       <button onClick={handleLogout}>Logout</button>
  //     </div>
  //   );
  // }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="login-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="College Name"
        className="login-input"
        value={collegeName}
        onChange={(e) => setCollegeName(e.target.value)}
      />
      <button className="login-button"  onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
