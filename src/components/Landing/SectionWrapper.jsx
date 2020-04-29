import React from "react";

// Mui
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const SectionWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Container component="section" className={classes.container}>
      <Card className={classes.card}>{children}</Card>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "4rem",
    padding: "1rem",
  },
  card: {
    padding: "1rem 3rem",
    minHeight: "25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

export default SectionWrapper;
