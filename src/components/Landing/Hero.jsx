import React from "react";

// Mui
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import HeroLeftPane from "./HeroLeftPane";
import HeroRightPane from "./HeroRightPane";

const Hero = () => {
  const classes = useStyles();

  return (
    <Grid container component="article" className={classes.root}>
      <Grid item xs={false} sm={1} />
      <Grid item component="section" xs={12} sm={6} className={classes.left}>
        <HeroLeftPane />
      </Grid>
      <Grid item xs={false} sm={5}>
        <HeroRightPane />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: "calc(100vh - 64px)",
  },
  left: {
    alignSelf: "center",
  },
}));

export default Hero;
