import React from 'react';
import UploadFormContainer from '../upload/upload_form_container';
import ProfilePageItem from './profile_page_item';
import PictureIndexItem from '../picture/picture_index_item';
class ProfilePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
    this.modalClick = this.modalClick.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  modalClose() {
    this.setState({modalOpen: false});
  }

  modalClick() {
    return (e) => {
      e.preventDefault();
      this.setState({modalOpen: true});
    };
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
    if (pictures) {
      pics = pictures;
    } 
    if (pictures.length === 0) {
      return (
        <img src={window.loader.loader} />
      );
    }
    window.onclick = (event) => {
      const modal = document.getElementById('upload-modal');
      if (event.target === modal) {
        this.modalClose();
      }
    };
    const modall = this.state.modalOpen ? (
      <div id="upload-modal" className="modal">
        <div className="modal-content">
          <UploadFormContainer modalClose={this.modalClose}/>
        </div>
      </div>
    ) : null;
    const { user } = this.props;
    let userPics = [];
    pics.map(picture => picture.userId === userId ?
      userPics.push(<div key={picture.id}className="img-box">
        <img className="user-image"src={`${picture.photoUrl}`}/>
      </div>)
    : null);
    return (
      <div className="content">
        <div className="profile-header-with-cover">
          <div className="cover-wrap">
            <img id="background-img" src="" />
          </div>
          <div className="user-details">
          {/* need to pass user.profile_pic */}
            <img className="profile-pic" src={user.profilePic}></img>
          </div>
        </div>
        <div className="user-info">
            {/* <h1 className="name-head">{this.props.username}</h1> */}

            <p className="personal-name">{user.username}</p>
            <p className="personal-desc">Hi, I am a space enthusiast. I upload cool pictures of space</p>
            
        </div> 
        <div className="profile-nav-bar">
        Photos
        </div>
        <div className="profile-body">
          <div className="full-grid-container">
            <div className="grid-container no-image">
            {userPics.length === 0 ? 
              <div className="no-image-container">
                <img className="no-placeholder" src={window.images.placeholder}></img>
                <p className="p-title">You haven't uploaded any photos yet</p>
                <p>Get the most out of Cosmic Snaps by uploading space pictures you like</p>
                <p>and share with other users in the Cosmic Snaps community</p>
                <button id="modal-btn" onClick={this.modalClick()}>
                  Upload
                </button>
              </div> : 
                userPics}
            </div>
          </div>
        </div>
        {modall}
      </div>
    );
  }
}

export default ProfilePage;
