import React from 'react';
import ImageComponent from './image_component';
import { Link } from 'react-router-dom';

const SplashComponent = () => {

  return (
    <div className="splash-container">
      <ImageComponent/>

      <div className="text-block">
        <div className="h1-container">
          <h1 className="h1-test">Billions upon billions of stars, captured into a timeless picture</h1>
        </div>
        <div className="h2-container">
          <h2 className="h2-test">Experience more than a pale blue dot</h2>
        </div>
        <div className="demo-container">
          <Link className="demo" to="/signup">DEMO LOGIN</Link>
        </div>
      </div>
    </div>
  );
};

export default SplashComponent;
