import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import LandingPage from './schedules/LandingPage';
import WeekSchedule from './schedules/WeekSchedule';
import DaySchedule from './schedules/DaySchedule';
import SignInPage from './auth/SignInPage';
import SignUpPage from './auth/SignUpPage';
import { AuthProvider } from '../context/Auth';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={LandingPage} />
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route path="/week" component={WeekSchedule} />
          <Route path="/day" component={DaySchedule} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/sign-up" component={SignUpPage} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
