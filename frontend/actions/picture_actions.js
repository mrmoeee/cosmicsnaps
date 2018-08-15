import * as APIPicUtil from '../util/picture_api_util';

export const RECEIVE_ALL_PICTURES = 'RECEIVE_ALL_PICTURES';
export const RECEIVE_PICTURE = 'RECEIVE_PICTURE';
export const CREATE_PICTURE = 'CREATE_PICTURE';
export const REMOVE_PICTURE = 'REMOVE_PICTURE';
export const RECEIVE_PICTURE_ERRORS = 'RECEIVE_PICTURE_ERRORS';
export const CLEAR_PIC_ERRORS = 'CLEAR_PIC_ERRORS';

export const receiveAllPictures = (pictures) => ({
  type: RECEIVE_ALL_PICTURES,
  pictures
});

export const receivePicture = (picture) => ({
  type: RECEIVE_PICTURE,
  picture
});

export const receiveErrors = errors => ({
  type: RECEIVE_PICTURE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_PIC_ERRORS
});

export const removePicture = (picId) => ({
  type: REMOVE_PICTURE,
  picId
});

export const requestAllPictures = () => dispatch => {
  return APIPicUtil.fetchAllPictures()
    .then(pictures => { dispatch(receiveAllPictures(pictures));}
  );
};

export const requestSinglePicture = userId => dispatch => {
  return APIPicUtil.fetchPicture(userId)
    .then(picture => {
      dispatch(receivePicture(picture));
      return picture;
    }
  );
};

export const createPic = picture => dispatch => {
  return APIPicUtil.createPicture(picture)
    .then(serverPic => {
      dispatch(receivePicture(serverPic));
    },
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const editPicture = picture => dispatch => {
  return APIPicUtil.editPicture(picture)
    .then(serverPic => dispatch(receivePicture(serverPic)));
};

export const deletePicture = picId => dispatch => {
  return APIPicUtil.deletePicture(picId)
    .then(serverPic => dispatch(removePicture(picId)));
};

export const removeErrors = () => {
  return dispatch => dispatch(clearErrors());
};
