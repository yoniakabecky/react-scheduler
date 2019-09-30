import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import LandingPage from './schedules/LandingPage';
import WeekSchedule from './schedules/WeekSchedule';
import SignInPage from './auth/SignInPage';
import SignUpPage from './auth/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/week" component={WeekSchedule} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
