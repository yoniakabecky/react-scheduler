import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Mui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

// Components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import BrandLogo from "./BrandLogo";

import { AuthContext } from "../../context/Auth";

const Navbar = () => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/home" className={classes.brandLogo}>
          <BrandLogo color="light" size={2} />
        </Link>
        {currentUser ? <SignedInLinks /> : <SignedOutLinks />}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  brandLogo: {
    flexGrow: 1,
  },
}));

export default Navbar;
