import React from "react";

// Mui
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import LandingLeftPane from "../components/home/LandingLeftPane";
import LandingRightPane from "../components/home/LandingRightPane";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        elevation={6}
        className={classes.contents}
      >
        <LandingLeftPane />
      </Grid>
      <Grid item xs={false} sm={4} md={7}>
        <LandingRightPane />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    height: "calc(100vh - 64px)"
  },
  contents: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  btn: {
    margin: "4rem 0",
    width: "10rem",
    height: "3rem",
    marginTop: "5rem"
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  }
}));

export default LandingPage;
