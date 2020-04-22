import React from "react";

// Mui
import { makeStyles } from "@material-ui/core/styles";

// Components
import Hero from "../components/Landing/Hero";
import { Container } from "@material-ui/core";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <main>
      <Hero />
    </main>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default LandingPage;
