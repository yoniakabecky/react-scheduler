import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import jwtDecode from "jwt-decode";

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

// Auth
const token = localStorage.FBToken;
let authenticated = false;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/sign-in";
    authenticated = false;
  } else {
    authenticated = true;
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
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute
              path="/home"
              component={HomePage}
              authenticated={authenticated}
            />
            <PrivateRoute
              path="/week"
              component={WeekSchedule}
              authenticated={authenticated}
            />
            <PrivateRoute
              path="/day"
              component={DaySchedule}
              authenticated={authenticated}
            />
            <AuthRoute
              path="/sign-in"
              component={SignInPage}
              authenticated={authenticated}
            />
            <AuthRoute
              path="/sign-up"
              component={SignUpPage}
              authenticated={authenticated}
            />
            <Route path="/forget-password" component={ForgetPassword} />
          </Switch>
          <Footer />
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
