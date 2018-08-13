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
        <ul>
          {pictures.map(pic => <PictureIndexItem key={pic.id} picture={pic}/>)}
        </ul>
      </section>
    );
  }
}

export default PictureIndex;
