import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { editPicture, requestAllPictures } from '../../actions/picture_actions';

const mapStateToProps = (state, ownProps) => ({
  picture: ownProps.picture,
  userId: state.session.id,
  modalClose: ownProps.modalClose
});

const mapDispatchToProps = dispatch => ({
  action: (pic, picId) => dispatch(editPicture(pic, picId)),
  requestAllPictures: () => dispatch(requestAllPictures())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
