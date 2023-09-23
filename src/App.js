// App.js
import React, { useReducer } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import authReducer, { initialState, actionTypes } from './authReducer';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [state, dispatch] = useReducer(authReducer, initialState);

  // const handleLogin = () => {
  //   setLoggedIn(true);
  // };
  const handleLogin = (username) => {
    dispatch({ type: actionTypes.LOGIN });
    dispatch({ type: actionTypes.SET_USERNAME, payload: username });
  };


  // const handleLogout = () => {
  //   setLoggedIn(false);
  // };

  const handleLogout = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };
  return (
    <div className="App">
      {state.loggedIn ? (
        // <Dashboard username={localStorage.getItem('username')} onLogout={handleLogout} />
        <Dashboard username={state.username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
