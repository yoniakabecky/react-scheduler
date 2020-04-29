import React from "react";
import { SIGN_UP } from "../../constants/pathNames";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import LinkedButton from "../layouts/LinkedButton";
import { Name, Mark } from "../layouts/BrandLogo";

const LandingBottomSection = () => {
  const classes = useStyles();

  return (
    <Container component="section" className={classes.root}>
      <Mark fill="dark" size={7} />
      <Typography component="h2" variant="h4">
        Make next shift with
        <Name fill="dark" size={3} style={{ marginBottom: "-0.6rem" }} />
      </Typography>

      <LinkedButton color="secondary" route={SIGN_UP} label="Get Started" />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    margin: "3rem auto",
    minHeight: "20rem",
  },
}));

export default LandingBottomSection;
