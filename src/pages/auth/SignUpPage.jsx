import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

// Mui
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Component
import AuthPageWrapper from "../../components/auth/AuthPageWrapper";
import SignUpInputs from "../../components/auth/SignUpInputs";
import LinkToSignIn from "../../components/auth/LinkToSignIn";

const SignUpPage = ({ history }) => {
  const classes = useStyles();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    axios
      .post("/signup", newUser)
      .then((res) => {
        console.log("signed up");
        localStorage.setItem("FBToken", `Bearer ${res.data.token}`);
        history.push("/home");
      })
      .catch((err) => console.error(err));
  };

  return (
    <AuthPageWrapper label="Sign up">
      <form className={classes.form} noValidate onSubmit={handleSignUp}>
        <SignUpInputs handleChange={handleChange} />
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

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: "1rem",
  },
  btn: {
    margin: "2rem 0 1rem 0",
  },
}));

export default withRouter(SignUpPage);
