import React from "react";
import TextField from "@material-ui/core/TextField";

const SignInInputs = ({ handleChange }) => {
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
        type="email"
        autoComplete="email"
        autoFocus
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        onChange={handleChange}
      />
    </>
  );
};

export default SignInInputs;
