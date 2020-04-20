import React from "react";
import { Link } from "react-router-dom";
import { FORGET_PASSWORD, SIGN_UP } from "../../constants/pathNames";

import Grid from "@material-ui/core/Grid";

const LinkToSignUp = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Link to={FORGET_PASSWORD}>Forgot password?</Link>
      </Grid>
      <Grid item>
        <Link to={SIGN_UP}>{"Don't have an account? Sign Up"}</Link>
      </Grid>
    </Grid>
  );
};

export default LinkToSignUp;
