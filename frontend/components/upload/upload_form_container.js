import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadForm from './upload_form';
import { createPic, requestAllPictures } from '../../actions/picture_actions';

const mapStateToProps = (state, ownProps) => ({
  picture: {
        title: "",
        description: "",
        photoFile: null,
        photoUrl: null
      },
  pictures: state.entities.pictures,
  userId: state.session.id,
  modalClose: ownProps.modalClose
});

const mapDispatchToProps = dispatch => ({
  action: (picture) => dispatch(createPic(picture)),
  requestAllPictures: () => dispatch(requestAllPictures())
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm));
