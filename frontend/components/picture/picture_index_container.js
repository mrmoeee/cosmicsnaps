import { connect } from 'react-redux';

import PictureIndex from './picture_index';
import { requestAllPictures, deletePicture} from '../../actions/picture_actions';
import { selectAllPictures } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pictures: selectAllPictures(state),
  currentUser: state.entities.users[state.session.id]
});


const mapDispatchToProps = dispatch => ({
  requestAllPictures: () => dispatch(requestAllPictures()),
  deletePicture: (picId) => dispatch(deletePicture(picId))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureIndex);
