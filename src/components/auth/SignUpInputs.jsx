import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const SignUpInputs = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="displayName"
          label="Company Name"
          type="text"
          autoComplete="display-name"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email Address"
          type="email"
          autoComplete="email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </Grid>
    </Grid>
  );
};

export default SignUpInputs;
