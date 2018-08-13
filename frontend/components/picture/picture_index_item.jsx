import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = ({ picture }) => {
  return (
    <div className="picIndexItem-container">
      <div className="li-container">
        <li className="lic-pictures">
          <div className="link-box">
            <Link to={`/picture/${picture.id}`}>
              <div className="pic-links-container">
                <p>{picture.title}</p>
              </div>
              <div className="pic-container">
                <img src={`${picture.photoUrl}`} />
              </div>
              <div className="pic-links-container">
                <p>{picture.description}</p>
              </div>
            </Link>
          </div>
        </li>
      </div>
    </div>
  );
};

export default PictureIndexItem;
//COME FINISH WHERE TO GET PICTURE URL?!?!?
