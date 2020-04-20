import React from "react";
import { Link } from "react-router-dom";
import { SIGN_IN } from "../../constants/pathNames";

import Grid from "@material-ui/core/Grid";

const LinkToSignIn = () => {
  return (
    <Grid container justify="flex-end">
      <Grid item>
        <Link to={SIGN_IN}>Already have an account? Sign in</Link>
      </Grid>
    </Grid>
  );
};

export default LinkToSignIn;
