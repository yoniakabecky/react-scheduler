import React from 'react';
import {
  Avatar, Button, CssBaseline, TextField, Grid, Container, Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { auth } from '../../firebase/firebase';

const ResetPassword = () => {

  const handleClick = event => {
    event.preventDefault();
    auth.currentUser.updatePassword(event.target.password)
      .catch(error => alert(error))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="auth-page-wrapper">
        <Avatar className="auth-page-avatar">
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <p>Please enter new password</p>
        <form className="auth-page-form" noValidate onSubmit={handleClick}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className="auth-page-submit"
            style={{ margin: "2rem 0 1rem 0" }}
            disabled
          >
            Change Password
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default ResetPassword;
