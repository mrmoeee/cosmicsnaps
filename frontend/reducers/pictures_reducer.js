import merge from 'lodash/merge';

import {
  RECEIVE_ALL_PICTURES,
  RECEIVE_PICTURE
} from '../actions/picture_actions';

const picturesReducer = (state={}, action) => {
  Object.freeze(state);
  let payload;

  switch (action.type) {
    case RECEIVE_ALL_PICTURES:
      return merge({}, state, action.pictures);
    case RECEIVE_PICTURE:
      payload = action.payload;
      return merge({}, state, {[payload.user_id]: payload});
    default:
      return state;
  }
};

export default picturesReducer;
