import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = ({ picture }) => {
  return (
    <div className="picIndexItem-container">
      <li>
        <Link to={`/picture/${picture.id}`}>
          <p>{picture.title}</p>
          <img src={`${picture.photoUrl}`} />
          <p>{picture.description}</p>
        </Link>
      </li>
    </div>
  );
};

export default PictureIndexItem;
//COME FINISH WHERE TO GET PICTURE URL?!?!?
