import React from 'react';
import { Route } from 'react-router-dom';

import PictureIndexItem from './picture_index_item';

class PictureIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPictures();
  }

  render() {
    const { pictures } = this.props;
    return (
      <div className="ul-container">
        <ul className="ul-pic-container">
          <div className="pic-container">
            {pictures.map(picture =>
              <li className="li-pictures" key={picture.id}>
                <PictureIndexItem picture={picture} />
              </li>
            )}
          </div>
        </ul>
      </div>
    );
  }
}

export default PictureIndex;
