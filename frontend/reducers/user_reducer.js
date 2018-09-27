import {
  EDIT_USER,
} from '../actions/session_actions';



const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case EDIT_USER:
      return { user: action.currentUser };
    default:
      return state;
  }
};

export default userReducer;
