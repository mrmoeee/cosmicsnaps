import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log in</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
      processForm: formUser => dispatch(signup(formUser)),
      clearErrors: () => dispatch(removeErrors())
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
