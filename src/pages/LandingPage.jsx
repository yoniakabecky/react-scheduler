import React from "react";

// Mui
import { makeStyles } from "@material-ui/core/styles";

// Components
import Hero from "../components/Landing/Hero";
import { Container } from "@material-ui/core";
import Footer from "../components/layouts/Footer";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default LandingPage;
