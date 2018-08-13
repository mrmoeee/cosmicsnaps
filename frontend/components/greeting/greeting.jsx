import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PictureIndexContainer from '../picture/picture_index_container';
import NavBarContainer from '../navbar/navbar_container';
//&nbsp = break line without space.
const Greeting = ({ currentUser, logout }) => {
  const greetings = () => {
    let container;
    console.log("im in dire need of guidance");
    return (
      <div>
        <hgroup className="header-group">
          <h2 className="header-name">Hi, { currentUser.username }!</h2>
          <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
      </div>
    );
  };
  return greetings();
};

export default Greeting;
