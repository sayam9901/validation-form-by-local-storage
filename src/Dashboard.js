// Dashboard.js
import React from 'react';

const Dashboard = ({ username, onLogout }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
