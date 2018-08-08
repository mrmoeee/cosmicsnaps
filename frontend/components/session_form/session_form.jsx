import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formUser = merge({}, this.state);
    this.props.processForm(formUser);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key ={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let display;
    if (this.props.formType === "signup") {
      display = "Already have an account?";
    } else {
      display = "Don't have an account?";
    }
    console.log(this.props.formType);
    return (
      <div className="formType-form-container">
        <form onSubmit={this.handleSubmit} className="formType-form-box">
          Welcome to CosmicSnaps !
          <br />

          <div className="formType-form">
            <br/>

            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="formType-input"
                />
            </label>
            <br/>

            <label>Password:
              <input type="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="formType-input"
                />
            </label>
            <br/>

            <input className="session-submit"
              type="submit"
              value={this.props.formType}
              />
            {this.renderErrors()}
            {display} {this.props.navLink}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
