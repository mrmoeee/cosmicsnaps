/* App .jsx , a functional componenet
 Renders tags that will hold more stuff*/
 import {
   Route,
   Redirect,
   Switch,
   Link,
   HashRouter
 } from 'react-router-dom';
//"We are a way for the cosmos to know itself." - Carl Sagan
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ImageComponent from './image_component.jsx';
const App = () => {
  return (
    <div>
      
        <Route path="/" component={GreetingContainer} />
        <AuthRoute exact path ="/" component={ImageComponent} />

      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
