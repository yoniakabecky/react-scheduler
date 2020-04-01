import React from 'react';
import { Grid, CssBaseline, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './landingPage.scss';


const LandingPage = () => {
  return (
    <Grid container component="main" className="landing-wrapper">
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} elevation={6} className="landing-contents">
        <div>
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
            className="landing-btn"
            style={{ marginTop: "5rem" }}
          >
            <Link to="/sign-up" className="landing-link">
              Get Started
            </Link>
          </Button>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className="landing-top-img" />
    </Grid>
  );
}

export default LandingPage;
