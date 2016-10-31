import React from 'react';
import { Link } from 'react-router';

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div>
        <h2>Welcome {currentUser.username}!</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <br></br>
        <Link to="/login">Log In</Link>
      </div>
    );
  }
};

export default Greeting;
