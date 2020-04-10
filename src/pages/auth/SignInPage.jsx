import React, { useCallback, useContext } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

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
import { AuthContext } from "../../context/Auth";

const SignInPage = ({ history }) => {
  const classes = useStyles();

  const handleLogin = useCallback(
    async event => {
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.btn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forget-password">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
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

export default withRouter(SignInPage);
