import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "./SectionWrapper";
import { Mark } from "../layouts/BrandLogo";

const LandingAboutSection = () => {
  const classes = useStyles();

  return (
    <SectionWrapper>
      <div style={{ textAlign: "center" }}>
        <Mark fill="dark" size={7} />
        <Typography component="h3" variant="h4" className={classes.line1}>
          Working at Restaurants, Cafés, wherever...
        </Typography>
        <Typography component="p" variant="h5" className={classes.line2}>
          Fighting making shift every month?
          <br />
          or weeks? mayby everyday?
        </Typography>
        <Typography component="p" variant="h5" className={classes.line2}>
          How many hours are you taking time to make one shifts?
          <br />
          bra bra bra...
        </Typography>
      </div>
    </SectionWrapper>
  );
};

const useStyles = makeStyles((theme) => ({
  line1: {
    marginBottom: "2rem",
  },
  line2: {
    marginBottom: "1rem",
  },
}));

export default LandingAboutSection;
