import React from 'react';
import {
  Avatar, Button, CssBaseline, TextField, Container, Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { auth } from '../../firebase/firebase';

const ForgetPassword = () => {

  const handleReset = event => {
    event.preventDefault();
    auth.sendPasswordResetEmail(event.target.email)
      .catch(error => alert(error))
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="auth-page-wrapper">
        <Avatar className="auth-page-avatar">
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot your Password?
        </Typography>
        <p>Enter your email address to request a password reset</p>
        <form className="auth-page-form" noValidate onSubmit={handleReset}>
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
            // className="auth-page-submit"
            style={{ margin: "2rem 0 1rem 0" }}
            disabled
          >
            Reset Password
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default ForgetPassword;
