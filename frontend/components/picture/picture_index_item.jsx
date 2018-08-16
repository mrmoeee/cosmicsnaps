import React from 'react';
import { Link } from 'react-router-dom';

//{Object.values(users[picture.userId])}

const PictureIndexItem = ({ picture, deletePicture, currentUser, users }) => {


  return (

      <li className="li-pictures">
        <div className="image-top-container">
          <p>{users[picture.userId].username}</p>
        </div>
        <div className="image-container">
          <img className="li-image"src={`${picture.photoUrl}`} />
        </div>
        <div className="image-bottom-container">
          <span className="image-bot-title">{picture.title}</span>
          <p className="image-bot-description">{picture.description}</p>
        </div>
        <div className="delete-container">
          {picture.userId === currentUser.id ?
            <button className="trashy" onClick={() => deletePicture(picture.id)}>
              <i className="material-icons">delete_forever</i>
            </button>
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
