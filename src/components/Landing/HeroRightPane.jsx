import React from "react";
import heroImg from "../../resources/topImage.jpg";

import { makeStyles } from "@material-ui/core/styles";

const HeroRightPane = () => {
  const classes = useStyles();

  return (
    <img src={heroImg} alt="welcome to scheduel" className={classes.img} />
  );
};

const useStyles = makeStyles((theme) => ({
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default HeroRightPane;
