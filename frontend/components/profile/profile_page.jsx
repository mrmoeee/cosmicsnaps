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
        <img src={window.loader.loader} />
      );
    }
    let profilePics = window.images.profiles;
    let randomNum = Math.floor(Math.random(4));
    return (
      <div className="content">
        <div className="profile-header-with-cover">
          <div className="cover-wrap">
            <img id="background-img" src="" />
          </div>
          <div className="user-details">
            <img className="profile-pic" src={profilePics[randomNum]}></img>
          </div>
        </div>
        <div className="user-info">
            {/* <h1 className="name-head">{this.props.username}</h1> */}

            <p className="personal-name">Astro Drifty</p>
            <p className="personal-desc">Hi, My name is astro, and I am a space enthusiast. I upload cool pictures of space</p>
            
        </div> 
        <div className="profile-nav-bar">
        Photos
        </div>
        <div className="profile-body">
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
