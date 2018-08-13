import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PictureIndexContainer from '../picture/picture_index_container';
import GreetingContainer from '../greeting/greeting_container';
//&nbsp = break line without space.


const sessionLinks = (currentUser, location) => {
  return (
    <div>
      <div className="header-right-link-box">
        { location.pathname === "/signup" ?
          <div className="header-right-login-link">
            <Link className="login-btn" to="/login">Log in</Link>
          </div>
          : null
        }
        { location.pathname === "/login" ?
          <div className="header-right-signup-link">
            <Link className="signup-btn" to="/signup">Sign up</Link>
          </div>
          : null
        }
        { location.pathname === "/" ?
          <div className="header-right-link-box">
            <div className="header-right-login-link">
              <Link to="/login">Log in</Link>
            </div>
            <div className="header-right-signup-link">
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
          : null
        }
        { (location.pathname === "/" && currentUser) ?
          <div className="header-right-link-box">
          </div>
          : null
        }
      </div>
    </div>
  );
};

const NavBar = ({ currentUser, location }) => {
  let cName;
  if (location.pathname === "/" && currentUser) {
    cName = "nav-holder white";
  } else if (location.pathname === "/") {
    cName = "nav-holder black";
  } else {
    cName = "nav-holder white";
  }

  return (
    <div className={cName}>
      <div className="header-left-box">
        <ul className="header-left-ul">
          <div className="header-left-link">
            <Link className="title" to="/">
              <p>cosmic</p>
              <p>snaps</p>
            </Link>
          </div>
        </ul>
      </div>
      <div className="header-right-box">
        <ul className="header-right-ul">
          {currentUser ? <GreetingContainer/> : sessionLinks(currentUser, location)}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
