import React from 'react';
import ImageComponent from './image_component';
import { Link } from 'react-router-dom';
import DemoContainer from './demo/demo_container';

const SplashComponent = () => {
  return (
    <div>
      <div className="splash-container">
        <ImageComponent/>
        <div className="text-block">
          <div className="h1-container">
            <h1 className="h1-test">Billions upon billions of stars, captured into a timeless picture</h1>
          </div>
          <div className="h2-container">
            <h2 className="h2-test">Experience more than a pale blue dot</h2>
          </div>
          <DemoContainer />
        </div>
      </div>
    </div>
  );
};

export default SplashComponent;
