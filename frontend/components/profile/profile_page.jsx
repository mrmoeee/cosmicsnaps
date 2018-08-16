import React from 'react';

import ProfilePageItem from './profile_page_item';
import PictureIndexItem from '../picture/picture_index_item';
class ProfilePage extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPictures();
    this.props.fetchUsers();
  }

  render() {
    let pics;
    const { userId, pictures } = this.props;
    if (this.props.pictures) {
      pics = this.props.pictures;
    }

    return (
      <ul>
        {pics.map(picture => picture.userId === userId ?
          <li key={picture.id}>
            <img src={`${picture.photoUrl}`}/>
          </li> : null)}
      </ul>
    );
  }
}

export default ProfilePage;
