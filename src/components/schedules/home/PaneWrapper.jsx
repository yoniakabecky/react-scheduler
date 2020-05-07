import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const PaneWrapper = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Paper component="section" elevation={3} className={classes.root}>
      <Typography variant="h6" component="h2" color="textSecondary">
        {title}
      </Typography>
      {children ? (
        <div className={classes.children}>{children}</div>
      ) : (
        <span className={classes.noData}>No Information</span>
      )}
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem 1rem",
    margin: "0.5rem",
    borderRadius: "0.5rem",
    minHeight: "15rem",
    maxHeight: "20rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  children: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "space-between",
    overflow: "scroll",
    width: "100%",
  },
  noData: {
    textAlign: "center",
    lineHeight: "10rem",
    color: theme.palette.text.secondary,
  },
}));

export default PaneWrapper;
