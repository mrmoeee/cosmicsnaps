import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import DemoContainer from '../demo/demo_container';

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formUser = merge({}, this.state);
    this.props.processForm(formUser);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }
  removeErrors() {
    return (e) => this.props.clearErrors();
  }
  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, idx) => (
          <li key ={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    let display;
    let title;
    let buttontxt;
    if (this.props.formType === "signup") {
      display = "Already have an account?";
      title = "Join CosmicSnaps";
      buttontxt = "Sign Up";
    } else {
      display = "Don't have an account?";
      title = "Log In to CosmicSnaps";
      buttontxt = "Log In";
    }
    return (
      <div className="formType-form-container">
        <form onSubmit={this.handleSubmit} className="formType-form-box">
          <div className="formType-form">
            <div className="login-title">
              <h1>{title}</h1>
            </div>
            <div className="username-box">
              <div className="username-label">
                <label>Email / Username
                </label>
              </div>
              <div className="username-input">
                <input type="text"
                  value={this.state.username}
                  placeholder="Email or Username"
                  onChange={this.update('username')}
                  onClick={this.removeErrors()}
                  className="formType-input"
                  />
              </div>
            </div>
            <div className="password-box">
              <label>Password
                <div className="password-input">
                  <input type="Password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.update('password')}
                    onClick={this.removeErrors()}
                    className="formType-input"
                    />
                </div>
              </label>
            </div>

            <div className="session-submit-box">
              <button type="submit" className="session-submit">{buttontxt}</button>
            </div>
            <div className="demo-form-box">
              <DemoContainer/>
            </div>
            <div className="errors-div">
              <div className="errors-box">
                {this.renderErrors()}
              </div>
            </div>
            <div className="session-prompt">
              {display} {this.props.navLink}
            </div>
          </div>
        </form>
        {/* background shooting star particles */}
        <div className="particle p-0"></div>
        <div className="particle p-1"></div>
        <div className="particle p-2"></div>
        <div className="particle p-3"></div>
        <div className="particle p-4"></div>
        <div className="particle p-5"></div>
        <div className="particle p-6"></div>
        {/* background static star particles  */}
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
        <div className="bg-particle"></div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
