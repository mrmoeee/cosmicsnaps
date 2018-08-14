import { connect } from 'react-redux';

import PictureIndex from './picture_index';
import { requestAllPictures } from '../../actions/picture_actions';
import { selectAllPictures } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pictures: selectAllPictures(state)

});


const mapDispatchToProps = dispatch => ({
  requestAllPictures: () => dispatch(requestAllPictures())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureIndex);
