import React from 'react';
import PictureIndexContainer from '../picture/picture_index_container';
import SplashComponent from '../splash_component';
import UploadFormContainer from '../upload/upload_form_container';

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }


  render () {
    if (this.props.currentUser) {
      return (
        <PictureIndexContainer />
      );
    } else {
      return (
        <SplashComponent />
      );
    }
  }
}
