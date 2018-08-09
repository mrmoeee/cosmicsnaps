import React from 'react';
import { Link } from 'react-router-dom';
//&nbsp = break line without space.


const Greeting = ({ currentUser, logout, location }) => {

  const sessionLinks = () => {
    let cName;
    if (location.pathname === "/") {
      cName = "nav-holder-main";
    } else {
      cName = "nav-holder";
    }
    return (
      <div className={cName}>
        <div className="header-left-box">
          <ul className="header-left-ul">
            <div className="header-left-link">
              <Link to="/">500</Link>
            </div>
          </ul>
        </div>

        <div className="header-right-box">
          <ul className="header-right-ul">
            <div className="header-right-button-box">
              { location.pathname === "/signup" ?
                <div className="header-right-login-link">
                  <Link className="login-btn" to="/login">Log in</Link>
                </div>
                  : null }
              { location.pathname === "/login" ?
                <div className="header-right-singup-link">
                  <Link className="signup-btn" to="/signup">Sign up</Link>
                </div>
                  : null }
              { location.pathname === "/" ?
                <div className="header-right-link-box">
                  <div className="header-right-login-link">
                    <Link to="/login">Log in</Link>
                  </div>
                  <div className="header-right-signup-link">
                    <Link to="/signup">Sign up</Link>
                  </div>
                </div>
                  : null }
            </div>
          </ul>
        </div>
      </div>
    );
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