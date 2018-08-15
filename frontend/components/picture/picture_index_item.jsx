import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = ({ picture }) => {
  return (
    <li className="li-pictures">
      <p>{picture.title}</p>
      <img src={`${picture.photoUrl}`} />
      <p>{picture.description}</p>
    </li>
  );
};

export default PictureIndexItem;

//header
//pic
//footer
