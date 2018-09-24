import React from 'react';

class FooterLinks extends React.Component {

  render () {
    return (
      <div className="link-container">
        <div>
          <a href="https://www.linkedin.com/in/matthew-r-moe/">
            <img className="logo" src={window.images.linked}/>
          </a>
        </div>
        <div>
          <a href="https://github.com/mrmoeee">
            <img className="logo" src={window.images.github}/>
          </a>
        </div>
      </div>
    );
  }
}

export default FooterLinks;
