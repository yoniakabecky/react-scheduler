import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerWrapper}>
      <small className={classes.copyright}>
        © {new Date().getFullYear()} Team 42
      </small>
      <div className={classes.socialLinks}>
        <FacebookIcon className={classes.icons} />
        <TwitterIcon className={classes.icons} />
        <YouTubeIcon className={classes.icons} />
        <LinkedInIcon className={classes.icons} />
      </div>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    position: "relative",
    padding: "1.5rem",
    height: "7rem",
  },
  copyright: {
    position: "absolute",
    bottom: "1.5rem",
    left: "1.5rem",
  },
  socialLinks: {
    position: "absolute",
    bottom: "1.5rem",
    right: "1.5rem",
  },
  icons: {
    margin: "0 0.5rem",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default Footer;
