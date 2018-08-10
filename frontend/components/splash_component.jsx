import React from 'react';
import ImageComponent from './image_component';

const SplashComponent = () => {

  return (
    <div className="splash-container">
      <ImageComponent/>

      <div className="h1-container">
        <h1 className="h1-test">YOU CANT SEE ME!</h1>
        <h2 className="h2-test">ME EITHER</h2>
      </div>
    </div>
  );
};

export default SplashComponent;
