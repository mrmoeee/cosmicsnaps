import React from 'react';
import { Route } from 'react-router-dom';

import PictureIndexItem from './picture_index_item';

class PictureIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPictures();
  }

  render() {
    const { pictures } = this.props;

    return (
      <section className="pictures-container">
        <div className="ul-container">
          <ul className="ul-pic-container">
            <div className="pic-conatainer">
              {pictures.map(pic => <PictureIndexItem key={pic.id} picture={pic}/>)}
            </div>
          </ul>
        </div>
      </section>
    );
  }
}

export default PictureIndex;
