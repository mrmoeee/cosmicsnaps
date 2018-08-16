import { connect } from 'react-redux';

import PictureIndex from './picture_index';
import { requestAllPictures, deletePicture } from '../../actions/picture_actions';
import { fetchUsers } from '../../actions/session_actions';
import { selectAllPictures } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pictures: selectAllPictures(state),
  currentUser: state.entities.users[state.session.id],
  users: state.entities.users
});


const mapDispatchToProps = dispatch => ({
  requestAllPictures: () => dispatch(requestAllPictures()),
  deletePicture: (picId) => dispatch(deletePicture(picId)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureIndex);
