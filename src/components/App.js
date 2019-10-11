import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import LandingPage from './landing/LandingPage';
import HomePage from './schedules/HomePage';
import WeekSchedule from './schedules/WeekSchedule';
import DaySchedule from './schedules/DaySchedule';
import SignInPage from './auth/SignInPage';
import SignUpPage from './auth/SignUpPage';
import { AuthProvider } from '../context/Auth';
import PrivateRoute from './auth/PrivateRoute';
import ForgetPassword from './auth/ForgetPassword';
import Footer from './layouts/Footer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/week" component={WeekSchedule} />
          <PrivateRoute path="/day" component={DaySchedule} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/forget-password" component={ForgetPassword} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
