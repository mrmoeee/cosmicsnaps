import React from 'react';
import { Route } from 'react-router-dom';

import PictureIndexItem from './picture_index_item';

class PictureIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('mounted');
    this.props.requestAllPictures();
    this.props.fetchUsers();
  }



  render() {
    const { pictures, deletePicture, currentUser } = this.props;
    return (
      <div className="ul-container">
        <ul className="ul-pic-container">
            {pictures.map(picture => <PictureIndexItem
              picture={picture}
              key={picture.id}
              deletePicture={this.props.deletePicture}
              currentUser={this.props.currentUser}
              users={this.props.users}
              />)}
        </ul>
      </div>
    );
  }
}

export default PictureIndex;
