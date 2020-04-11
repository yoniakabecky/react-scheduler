import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";

// Mui
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Auth
import { auth } from "../../firebase/firebase";
import { AuthContext } from "../../context/Auth";

// Component
import AuthPageWrapper from "../../components/auth/AuthPageWrapper";
import SignInInputs from "../../components/auth/SignInInputs";
import LinkToSignUp from "../../components/auth/LinkToSignUp";

const SignInPage = ({ history }) => {
  const classes = useStyles();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) return <Redirect to="/home" />;

  return (
    <AuthPageWrapper label="Sign in">
      <form className={classes.form} noValidate onSubmit={handleLogin}>
        <SignInInputs />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.btn}
        >
          Sign In
        </Button>
        <LinkToSignUp />
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

export default withRouter(SignInPage);
