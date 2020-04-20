import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LANDING_PAGE } from "../constants/pathNames";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={LANDING_PAGE} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.employee.authenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
