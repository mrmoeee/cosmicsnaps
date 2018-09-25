import React from 'react';
import { Link } from 'react-router-dom';
import EditFormContainer from '../upload/edit_form_container';

//{Object.values(users[picture.userId])}

class PictureIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,

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
      // const modal = document.getElementById('upload-modal');
      // modal.style.display = "flex";
    };
  }

  render () {

    const { picture, deletePicture, currentUser, users } = this.props;
    const modal = this.state.modalOpen ? (
      <div id="upload-modal" className="modal">
        <div className="modal-content">
          <EditFormContainer modalClose={this.modalClose} picture={picture}/>
        </div>
      </div>
    )  : null;
    return (
      <li className="li-pictures">
        <div className="image-top-container">
          <div>
            <img className="icon-img" src={window.icon.logo}/>
          </div>
          <div className="username-box">
            {users[picture.userId].username}
          </div>
        </div>
        <div className="image-container">

          <img className="li-image"src={`${picture.photoUrl}`} />

        </div>
        <div className="image-bottom-container">
          <span className="image-bot-title">{picture.title}</span>
          <p className="image-bot-description">{picture.description}</p>
          <div className="delete-container">
            {picture.userId === currentUser.id ?
            <div className="del-edit-box">
              <button className="trashy" onClick={() => deletePicture(picture.id)}>
                <i className="material-icons">delete_forever</i>
              </button>

                <button className="edit-btn"onClick={this.modalClick()}>
                  edit
                </button>
                {modal}

            </div>
            : null
            }
          </div>
        </div>
      </li>
    );
  }
}


export default PictureIndexItem;

//header
//pic
//footer
