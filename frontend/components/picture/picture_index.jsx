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
            {pictures.map(picture => <PictureIndexItem
              picture={picture}
              key={picture.id}
              deletePicture={this.props.deletePicture}
              currentUser={this.props.currentUser}
              />)}
        </ul>
      </div>
    );
  }
}

export default PictureIndex;
