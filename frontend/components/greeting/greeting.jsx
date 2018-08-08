import React from 'react';
import { Link } from 'react-router-dom';
//&nbsp = break line without space.

const Greeting = ({ currentUser, logout, location }) => {
  console.log(location);
  const sessionLinks = () => {
    switch (location.pathname) {
      case "/":
        return (
          <nav className="login-signup">
            <Link to="/login">Log in</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up</Link>
          </nav>
        );
      case "/signup":
        return (
          <nav className="login-signup">
            <Link to="/login">Log in</Link>
          </nav>
        );
      case "/login":
        return (
          <nav className="login-signup">
            <Link to="/signup">Sign up</Link>
          </nav>
        );
      default:
        return null;
    }
  };


  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, { currentUser.username }!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );


  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
