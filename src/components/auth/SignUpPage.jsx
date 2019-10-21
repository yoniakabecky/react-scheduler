import React, { useCallback } from 'react';
import {
  Avatar, Button, CssBaseline, TextField, Grid, Container, Typography,
  // FormControlLabel, Checkbox,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';
import './scss/auth.scss';
import { auth } from '../../firebase/firebase';


const SignUpPage = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, displayName } = event.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
      await auth.currentUser.updateProfile({ displayName: displayName.value })
        .catch(error => alert('failed update profile', error));
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="auth-page-wrapper">
        <Avatar className="auth-page-avatar">
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="auth-page-form" noValidate onSubmit={handleSignUp}>
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
            style={{ margin: "2rem 0 1rem 0" }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/sign-in">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignUpPage);
