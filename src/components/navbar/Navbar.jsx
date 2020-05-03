import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { USER_HOME } from "../../constants/pathNames";

//Mui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// Components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import BrandLogo from "../layouts/BrandLogo";

const Navbar = ({ authenticated, user }) => {
  return (
    <AppBar position="static">
      <Toolbar component="nav">
        <Link to={USER_HOME}>
          <BrandLogo color="light" size={2} />
        </Link>
        <span style={{ flexGrow: 1 }} />
        {authenticated ? <SignedInLinks user={user} /> : <SignedOutLinks />}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.employee.authenticated,
  user: state.employee.user,
});

export default connect(mapStateToProps)(Navbar);
