import React from "react";

// Mui
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Container,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LockOutlined } from "@material-ui/icons";

// Auth
import { auth } from "../../firebase/firebase";

const ForgetPassword = () => {
  const classes = useStyles();

  const handleReset = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(event.target.email)
      .catch(error => alert(error));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot your Password?
        </Typography>
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
            autoComplete="current-password"
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
      </div>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: "1rem",
    backgroundColor: "#f50057"
  },
  form: {
    width: "100%",
    marginTop: "1rem"
  },
  btn: {
    margin: "2rem 0 1rem 0"
  }
}));

export default ForgetPassword;
