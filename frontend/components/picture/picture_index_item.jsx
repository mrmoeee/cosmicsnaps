import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = ({ picture }) => {
  return (
    <div>
      <p>{picture.title}</p>
      <img src={`${picture.photoUrl}`} />
      <p>{picture.description}</p>
    </div>
  );
};

export default PictureIndexItem;

//header
//pic
//footer
