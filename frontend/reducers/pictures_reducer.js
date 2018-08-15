import merge from 'lodash/merge';

import {
  RECEIVE_ALL_PICTURES,
  RECEIVE_PICTURE
} from '../actions/picture_actions';

const picturesReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_PICTURES:
      return merge({}, state, action.pictures);
    case RECEIVE_PICTURE:
      return merge({}, state, {[action.picture.id]: action.picture});
    default:
      return state;
  }
};

export default picturesReducer;
