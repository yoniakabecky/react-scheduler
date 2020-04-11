import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

// Mui
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Auth
import { auth } from "../../firebase/firebase";

// Component
import AuthPageWrapper from "../../components/auth/AuthPageWrapper";
import SignUpInputs from "../../components/auth/SignUpInputs";
import LinkToSignIn from "../../components/auth/LinkToSignIn";

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
    <AuthPageWrapper label="Sign up">
      <form className={classes.form} noValidate onSubmit={handleSignUp}>
        <SignUpInputs />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.btn}
        >
          Sign Up
        </Button>
        <LinkToSignIn />
      </form>
    </AuthPageWrapper>
  );
};

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: "1rem"
  },
  btn: {
    margin: "2rem 0 1rem 0"
  }
}));

export default withRouter(SignUpPage);
