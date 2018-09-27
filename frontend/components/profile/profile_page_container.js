import { connect } from 'react-redux';

import ProfilePage from './profile_page';
import { requestAllPictures } from '../../actions/picture_actions';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users;
  let userId;
  for (let key in users) {
    if (users[key].username === ownProps.match.params.username){
      userId = parseInt(key);
    }
  }
  return ({
    username: ownProps.match.params.username,
    userId: userId,
    pictures: Object.values(state.entities.pictures),
    user: state.entities.users[userId]
  });

};

const mapDispatchToProps = dispatch => ({
  requestAllPictures: () => dispatch(requestAllPictures()),
  fetchUsers: () => dispatch(fetchUsers())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
