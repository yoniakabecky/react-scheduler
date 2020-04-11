import React from "react";

import LinkedButton from "../layouts/LinkedButton";
import Typography from "@material-ui/core/Typography";

const LandingLeftPane = () => {
  return (
    <section>
      <Typography component="h1" variant="h2">
        Scheduler
      </Typography>
      <br />
      <Typography component="h2" variant="h5">
        Make your work shifts easily
      </Typography>

      <LinkedButton color="secondary" route="/sign-up" label="Get Started" />
    </section>
  );
};

export default LandingLeftPane;
