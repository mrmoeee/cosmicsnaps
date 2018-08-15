import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = ({ picture, deletePicture, currentUser }) => {
  return (

      <li className="li-pictures">
        <div className="image-top-container">
          <p>USERAVATARPLACEHOLDER</p>
        </div>
        <div className="image-container">
          <img className="li-image"src={`${picture.photoUrl}`} />
        </div>
        <div className="image-bottom-container">
          <span className="image-bot-title">{picture.title}</span>
          <p className="image-bot-description">{picture.description}</p>
          {picture.userId === currentUser.id ?
            <button onClick={() => deletePicture(picture.id)}>DELETE</button>
            : null
          }
        </div>
      </li>

  );
};

export default PictureIndexItem;

//header
//pic
//footer
