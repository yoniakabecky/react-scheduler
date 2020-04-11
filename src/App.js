import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import WeekSchedule from "./pages/schedules/WeekSchedule";
import DaySchedule from "./pages/schedules/DaySchedule";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import ForgetPassword from "./pages/auth/ForgetPassword";

// Components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

// Auth
import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./components/auth/PrivateRoute";

// Mui
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./utils/theme";

function App() {
  return (
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
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
        </Router>
      </MuiThemeProvider>
    </AuthProvider>
  );
}

export default App;
