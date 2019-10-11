import React from 'react';
import { Grid, CssBaseline, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const classes = {
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://picsum.photos/id/1060/5598/3732?grayscale&blur=4)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: '10rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: "4rem 0",
    width: "10rem",
    height: "3rem",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  }
}

const LandingPage = () => {
  return (
    <Grid container component="main" style={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} style={classes.image} />
      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <div style={classes.paper}>
          <Typography component="h1" variant="h2">
            Scheduler
          </Typography>
          <br />
          <Typography component="h1" variant="h5">
            Make your work shift easily
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            style={classes.submit}
          >
            <Link to="/sign-up" style={classes.link}>
              Get Started
            </Link>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
