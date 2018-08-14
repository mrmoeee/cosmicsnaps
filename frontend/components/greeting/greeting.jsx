import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadFormContainer from '../upload/upload_form_container';
//&nbsp = break line without space.

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);

    this.modalClose = this.modalClose.bind(this);
    this.modalClick = this.modalClick.bind(this);
  }

  modalClick() {
    return (e) => {
      e.preventDefault();
      const modal = document.getElementById('upload-modal');
      modal.style.display = "block";
    };
  }

  modalClose() {
    return (e) => {
      e.preventDefault();
      const modal = document.getElementById('upload-modal');
      modal.style.display = "none";
    };
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      <hgroup className="header-group">
        <h2 className="header-name">PILOT: { currentUser.username }</h2>

        <div className="dropdown">
          <span className="img-box">
            <img className="icon-img" src={window.icon.logo}/>
          </span>
          <div className="dropdown-content">
            <button className="header-button" onClick={logout}>Log Out</button>
          </div>
        </div>

        <div className="modal-container">
          <button id="modal-btn" onClick={this.modalClick()}>
            <i className="material-icons">cloud_upload</i> Upload
          </button>
          <div id="upload-modal" className="modal">
            <div className="modal-content">
              <span onClick={this.modalClose()} className="close">x</span>
              <p>Some stupid text</p>
              <UploadFormContainer />
            </div>
          </div>
        </div>

      </hgroup>
    );
  }
}
