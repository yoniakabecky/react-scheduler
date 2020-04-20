import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import * as Path from "./constants/pathNames";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";
import { SET_AUTHENTICATED } from "./constants/actionTypes";
import { signOutUser } from "./actions/employeeActions";

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
import PrivateRoute from "./utils/PrivateRoute";
import AuthRoute from "./utils/AuthRoute";

// Mui
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./utils/theme";

const token = localStorage.FBToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(signOutUser());
    window.location.href = `${Path.SIGN_IN}`;
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authentication"] = token;
  }
}

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={Path.LANDING_PAGE} component={LandingPage} />
            <PrivateRoute path={Path.USER_HOME} component={HomePage} />
            <PrivateRoute path={Path.WEEKLY_VIEW} component={WeekSchedule} />
            <PrivateRoute path={Path.DAILY_VIEW} component={DaySchedule} />
            <AuthRoute path={Path.SIGN_IN} component={SignInPage} />
            <AuthRoute path={Path.SIGN_UP} component={SignUpPage} />
            <Route path={Path.FORGET_PASSWORD} component={ForgetPassword} />
          </Switch>
          <Footer />
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
