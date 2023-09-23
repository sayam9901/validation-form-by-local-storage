// AuthProvider.js

import React, { createContext, useContext, useReducer } from 'react';
import authReducer, { initialState } from './authReducer';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Add your authentication-related functions and state here, like login and logout

  const login = (username) => {
    // Perform authentication logic here
    // Update the state using dispatch
    dispatch({ type: 'LOGIN', payload: username });
  };

  const logout = () => {
    // Perform logout logic here
    // Update the state using dispatch
    dispatch({ type: 'LOGOUT' });
  };

  // Create an object with the authentication state and functions
  const authContextValue = {
    state,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
