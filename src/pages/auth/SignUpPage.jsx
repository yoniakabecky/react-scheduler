import React, { useCallback } from "react";
import { Link, withRouter } from "react-router-dom";

// Mui
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Container,
  Typography
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

// Auth
import { auth } from "../../firebase/firebase";

const SignUpPage = ({ history }) => {
  const classes = useStyles();

  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password, displayName } = event.target.elements;
      try {
        await auth.createUserWithEmailAndPassword(email.value, password.value);
        await auth.currentUser
          .updateProfile({ displayName: displayName.value })
          .catch(error => alert("failed update profile", error));
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignUp}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.btn}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/sign-in">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
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

export default withRouter(SignUpPage);
