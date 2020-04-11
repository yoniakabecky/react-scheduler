import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

const LinkToSignUp = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Link to="/forget-password">Forgot password?</Link>
      </Grid>
      <Grid item>
        <Link to="/sign-up">{"Don't have an account? Sign Up"}</Link>
      </Grid>
    </Grid>
  );
};

export default LinkToSignUp;
