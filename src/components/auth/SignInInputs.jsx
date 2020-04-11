import React from "react";
import TextField from "@material-ui/core/TextField";

const SignInInputs = () => {
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
    </>
  );
};

export default SignInInputs;
