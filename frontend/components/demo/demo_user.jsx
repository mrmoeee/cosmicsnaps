import React from 'react';

class DemoUser extends React.Component {

  constructor(props) {
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    const carlsagan = { username: "carlsagan", password: "123456"};
    this.props.login(carlsagan);
  }

  render() {
    return (
      <div className="demo-container">
        <button className="demo" onClick={this.handleDemo}>
          DEMO LOGIN
        </button>
      </div>
    );
  }
}

export default DemoUser;
