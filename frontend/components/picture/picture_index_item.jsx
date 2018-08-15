import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = ({ picture }) => {
  return (
    <li className="li-pictures">
      <div className="image-top-container">
        <p>USERAVATARPLACEHOLDER</p>
      </div>
      <div className="image-container">
        <img src={`${picture.photoUrl}`} />
      </div>
      <div className="image-bottom-container">
        <span>{picture.title}</span>
        <p>{picture.description}</p>
      </div>
    </li>
  );
};

export default PictureIndexItem;

//header
//pic
//footer
