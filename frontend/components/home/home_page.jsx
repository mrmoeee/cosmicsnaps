import React from 'react';
import PictureIndexContainer from '../picture/picture_index_container';
import SplashComponent from '../splash_component';

const HomePage = ({ currentUser }) => {
  if (currentUser) {
    return (
      <div>
        <PictureIndexContainer />
      </div>
    );
  } else {
    return (
      <div>
        <SplashComponent />
      </div>
    );
  }
};
export default HomePage;
