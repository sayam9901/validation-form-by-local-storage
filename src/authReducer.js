// authReducer.js
export const initialState = {
    loggedIn: false,
    username: '',
  };
  
  export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    SET_USERNAME: 'SET_USERNAME',
  };
  
  const authReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.LOGIN:
        return {
          ...state,
          loggedIn: true,
        };
      case actionTypes.LOGOUT:
        return {
          ...state,
          loggedIn: false,
          username: '',
        };
      case actionTypes.SET_USERNAME:
        return {
          ...state,
          username: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  