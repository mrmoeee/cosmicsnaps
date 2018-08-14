import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadForm from './upload_form';
import { createPic, requestAllPictures } from '../../actions/picture_actions';

const mapStateToProps = state => ({
  pictures: state.entities.pictures,
  userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createPic: (picture) => dispatch(createPic(picture)),
  requestAllPictures: () => dispatch(requestAllPictures())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
