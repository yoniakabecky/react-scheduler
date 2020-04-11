import React from "react";

// Mui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

// Auth
import { auth } from "../../firebase/firebase";

// Components
import AuthPageWrapper from "../../components/auth/AuthPageWrapper";

const ResetPassword = () => {
  const classes = useStyles();

  const handleClick = (event) => {
    event.preventDefault();
    auth.currentUser
      .updatePassword(event.target.password)
      .catch((error) => alert(error));
  };

  return (
    <AuthPageWrapper label="Reset Password">
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

export default ResetPassword;
