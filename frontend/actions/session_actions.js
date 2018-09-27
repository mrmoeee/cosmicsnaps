import * as APIUtil from '../util/session_api_util';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const EDIT_USER = 'EDIT_USER';

export const editUserInfo = (user) => ({
  type: EDIT_USER,
  user
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchUsers = () => dispatch => {
  return APIUtil.fetchAllUsers()
    .then(users => { dispatch(receiveAllUsers(users));}
  );
};


export const signup = (formUser) => dispatch => {
  return APIUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const login = (formUser) => dispatch => {
  return APIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then( () => dispatch(logoutCurrentUser()));
};

export const removeErrors = () => {
  return dispatch =>
    dispatch(clearErrors());
};

export const editUser = (user, id) => dispatch => {
  return APIUtil.editUserInfo(user, id)
    .then(serverUser => dispatch(editUserInfo(serverUser)));
};
