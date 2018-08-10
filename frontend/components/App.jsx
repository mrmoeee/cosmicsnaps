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
import SplashComponent from './splash_component';
import HomePage from './home/home_page';

const App = () => {
  return (
    <div>
      <Route path = "/" component={GreetingContainer} />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path = "/home" component={HomePage} />
        <AuthRoute exact path = "/" component={SplashComponent} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
