import React from "react";

// Mui
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LockOutIcon from "@material-ui/icons/LockOutlined";

const AuthPageWrapper = ({ label, children }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <section className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {label}
        </Typography>
        {children}
      </section>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "1rem",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default AuthPageWrapper;
