import React from 'react';

import ProfilePageItem from './profile_page_item';
import PictureIndexItem from '../picture/picture_index_item';
class ProfilePage extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPictures();
    //FETCH USER HOME PAGE REFACTOR!
    this.props.fetchUsers();
  }

  // CREATE A BUTTON IN RENDER ?! OR SOMEWHERE?
  setBackground(src) {
    document.getElementById('background-img').src = `${src}`;
  }

  render() {
    let pics;
    const { userId, pictures } = this.props;
    if (this.props.pictures) {
      pics = this.props.pictures;
    }
    if (this.props.pictures.length === 0) {
      return (
        <img src={window.loader.loader1} />
      );
    }

    return (
      <div className="content">
        <div className="profile-header-with-cover">
          <div className="cover-wrap">
            <img id="background-img" src="" />
          </div>
          <div className="user-details">
            <h1>{this.props.username}</h1>
          </div>
        </div>
        <div className="profile-nav-bar">
        </div>
        <div className="profile-body">
          BODYYYYY
          <div className="full-grid-container">
            <div className="grid-container">
                {pics.map(picture => picture.userId === userId ?
                    <div key={picture.id}className="img-box">

                      <img className="user-image"src={`${picture.photoUrl}`}/>
                    </div>
                  : null)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
