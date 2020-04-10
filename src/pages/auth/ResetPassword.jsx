import React from "react";

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
import { makeStyles } from "@material-ui/core/styles";
import { LockOutlined } from "@material-ui/icons";

// Auth
import { auth } from "../../firebase/firebase";

const ResetPassword = () => {
  const classes = useStyles();

  const handleClick = event => {
    event.preventDefault();
    auth.currentUser
      .updatePassword(event.target.password)
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
          Reset Password
        </Typography>
        <p>Please enter new password</p>
        <form className={classes.form} noValidate onSubmit={handleClick}>
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
            className={classes.btn}
            disabled
          >
            Change Password
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

export default ResetPassword;
