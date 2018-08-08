/* App .jsx , a functional componenet
 Renders tags that will hold more stuff*/
 import {
   Route,
   Redirect,
   Switch,
   Link,
   HashRouter
 } from 'react-router-dom';

import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h1>SWEET ITS WORKING. I AM IN COMPONENTS/APP</h1>
        <GreetingContainer />
      </header>

      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      
    </div>
  );
};

export default App;
