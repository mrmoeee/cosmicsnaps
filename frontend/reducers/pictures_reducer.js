import merge from 'lodash/merge';

import {
  RECEIVE_ALL_PICTURES,
  RECEIVE_PICTURE
} from '../actions/picture_actions';

const picturesReducer = (state={}, action) => {
  Object.freeze(state);
  let pic;

  switch (action.type) {
    case RECEIVE_ALL_PICTURES:
      return merge({}, state, action.pictures);
    case RECEIVE_PICTURE:
      pic = action.payload.pictures;
      return merge({}, state, {[pic.id]: pic});
    default:
      return state;
  }
};

export default picturesReducer;
