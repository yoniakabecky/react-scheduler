import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Mui
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Component
import AuthPageWrapper from "../../components/auth/AuthPageWrapper";
import SignUpInputs from "../../components/auth/SignUpInputs";
import LinkToSignIn from "../../components/auth/LinkToSignIn";

// redux
import { connect } from "react-redux";
import { signUpUser } from "../../actions/employeeActions";

const SignUpPage = ({ history, signUpUser }) => {
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
    signUpUser(newUser, history);
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

const mapStateToProps = (state) => ({
  employee: state.employee,
});

export default connect(mapStateToProps, { signUpUser })(withRouter(SignUpPage));
