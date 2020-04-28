import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "./SectionWrapper";

const LandingAboutSection = () => {
  const classes = useStyles();

  return (
    <SectionWrapper>
      <div className={classes.left}>
        <Typography component="h3" variant="h4">
          Why Scheduel?
        </Typography>
        <ul className={classes.list}>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolor
            harum id sit, rem dignissimos, possimus porro et, modi voluptate
            cum!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            sequi.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
            ducimus perspiciatis fugit placeat totam repudiandae itaque quae
            modi maiores pariatur.
          </li>
        </ul>
      </div>
      <div className={classes.right}></div>
    </SectionWrapper>
  );
};

const useStyles = makeStyles((theme) => ({
  left: {
    width: "50%",
    paddingLeft: "1rem",
    paddingRight: "4rem",
  },
  list: {
    fontSize: "1.1rem",
  },
  right: {
    width: "50%",
    height: "20rem",
    background: "#E3E3E3",
  },
}));

export default LandingAboutSection;
