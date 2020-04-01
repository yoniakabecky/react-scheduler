import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import WeekSchedule from "./pages/schedules/WeekSchedule";
import DaySchedule from "./pages/schedules/DaySchedule";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./components/auth/PrivateRoute";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Footer from "./components/layouts/Footer";

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
