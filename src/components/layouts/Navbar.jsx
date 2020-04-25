import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { USER_HOME } from "../../constants/pathNames";

//Mui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

// Components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import BrandLogo from "./BrandLogo";

const Navbar = ({ authenticated }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar component="nav">
        <Link to={USER_HOME} className={classes.brandLogo}>
          <BrandLogo color="light" size={2} />
        </Link>
        {authenticated ? <SignedInLinks /> : <SignedOutLinks />}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  brandLogo: {
    flexGrow: 1,
  },
}));

const mapStateToProps = (state) => ({
  authenticated: state.employee.authenticated,
});

export default connect(mapStateToProps)(Navbar);
