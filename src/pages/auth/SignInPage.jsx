import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Mui
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Component
import AuthPageWrapper from "../../components/auth/AuthPageWrapper";
import SignInInputs from "../../components/auth/SignInInputs";
import LinkToSignUp from "../../components/auth/LinkToSignIn";

// redux
import { connect } from "react-redux";
import { signInUser } from "../../redux/actions/employeeActions";

const SignInPage = ({ history, signInUser }) => {
  const classes = useStyles();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    signInUser(userData, history);
  };

  return (
    <AuthPageWrapper label="Sign in">
      <form className={classes.form} noValidate onSubmit={handleLogin}>
        <SignInInputs handleChange={handleChange} />
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

const mapStateToProps = (state) => ({
  employee: state.employee,
});

export default connect(mapStateToProps, { signInUser })(withRouter(SignInPage));
