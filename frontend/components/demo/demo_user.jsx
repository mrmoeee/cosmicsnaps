import React from 'react';

class DemoUser extends React.Component {

  constructor(props) {
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    const astroadrift = { username: "astroadrift", password: "123456"};
    this.props.login(astroadrift);
  }

  render() {
    return (
      <div className="demo-container">
        <button className="demo" onClick={this.handleDemo}>
          Demo Log in
        </button>
      </div>
    );
  }
}

export default DemoUser;
