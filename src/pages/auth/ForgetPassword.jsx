import React from "react";

// Mui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

// Auth
import { auth } from "../../firebase/firebase";

// Components
import AuthPageWrapper from "../../components/auth/AuthPageWrapper";

const ForgetPassword = () => {
  const classes = useStyles();

  const handleReset = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(event.target.email)
      .catch((error) => alert(error));
  };

  return (
    <AuthPageWrapper label="Forgot your Password?">
      <p>Enter your email address to request a password reset</p>
      <form className={classes.form} noValidate onSubmit={handleReset}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          type="email"
          autoComplete="email"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.btn}
          disabled
        >
          Reset Password
        </Button>
      </form>
    </AuthPageWrapper>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: "1rem",
  },
  btn: {
    margin: "2rem 0 1rem 0",
  },
}));

export default ForgetPassword;
