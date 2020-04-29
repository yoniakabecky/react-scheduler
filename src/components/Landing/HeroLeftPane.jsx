import React from "react";
import { SIGN_UP } from "../../constants/pathNames";
import LinkedButton from "../layouts/LinkedButton";

// Mui
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const HeroLeftPane = () => {
  const classes = useStyles();

  return (
    <div className={classes.sectionWrapper}>
      <Typography component="h2" variant="h3" className={classes.header}>
        Making work shifts?
      </Typography>
      <Typography component="h3" variant="h5">
        Create your team shifts easily,
        <br />
        quickly and efficiently
      </Typography>

      <LinkedButton
        color="secondary"
        route={SIGN_UP}
        label="Get Started"
        className={classes.btn}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  sectionWrapper: {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      textAlign: "center",
    },
  },
  header: {
    marginBottom: "1.5rem",
  },
  btn: {
    margin: "2rem 0",
  },
}));

export default HeroLeftPane;
