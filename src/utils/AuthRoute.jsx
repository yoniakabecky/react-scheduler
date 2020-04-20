import React from "react";
import { USER_HOME } from "../constants/pathNames";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Redirect to={USER_HOME} /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.employee.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
