import React, { useCallback, useContext } from 'react';
import {
  Avatar, Button, CssBaseline, TextField, Grid, Container, Typography,
  // FormControlLabel, Checkbox, Box, 
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Link, withRouter, Redirect } from 'react-router-dom';
import './scss/auth.scss';
import { auth } from '../../firebase/firebase';
import { AuthContext } from '../../context/Auth';


const SignInPage = ({ history }) => {
  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  }, [history])

  const { currentUser } = useContext(AuthContext);

  if (currentUser) return <Redirect to="/home" />;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="auth-page-wrapper">
        <Avatar className="auth-page-avatar">
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="auth-page-form" noValidate onSubmit={handleLogin}>
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
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className="auth-page-submit"
            style={{ margin: "2rem 0 1rem 0" }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forget-password">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}

export default withRouter(SignInPage);
