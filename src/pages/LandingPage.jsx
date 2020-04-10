import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        <section>
          <Typography component="h1" variant="h2">
            Scheduler
          </Typography>
          <br />
          <Typography component="h1" variant="h5">
            Make your work shifts easily
          </Typography>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.btn}
          >
            <Link to="/sign-up" className={classes.link}>
              Get Started
            </Link>
          </Button>
        </section>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.img} />
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
  },
  img: {
    backgroundImage:
      'url("https://picsum.photos/id/1060/5598/3732?grayscale&blur=4")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
}));

export default LandingPage;
