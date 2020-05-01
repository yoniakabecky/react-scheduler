import React from "react";
import { Link } from "react-router-dom";

// Mui
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const MenuCard = ({ props }) => {
  const classes = useStyles();
  const { title, path, icon, disabled } = props;

  const renderMenu = () => (
    <>
      <span className={classes.btnIcons}>{icon}</span>
      <Typography component="h2" variant="h6" align="center">
        {title}
      </Typography>
    </>
  );

  return !disabled ? (
    <Paper elevation={3} className={classes.menu}>
      <Link to={path} className={classes.link}>
        {renderMenu()}
      </Link>
    </Paper>
  ) : (
    <Paper elevation={0} className={classes.disabled}>
      {renderMenu()}
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  menu: {
    width: "18rem",
    height: "12rem",
    margin: "2rem auto",
    padding: "2rem",
    color: theme.palette.primary.light,
  },
  disabled: {
    width: "18rem",
    height: "12rem",
    margin: "2rem auto",
    padding: "2rem",
    color: "#a3a3a3",
    background: "#e3e3e3",
    "& span svg": {
      color: "#a3a3a3",
    },
  },
  link: {
    width: "100%",
    height: "100%",
    display: "block",
  },
  btnIcons: {
    "& > svg": {
      color: theme.palette.primary.light,
      fontSize: "4rem",
      display: "inline-block",
      width: "100%",
      margin: "0.5rem auto 1rem auto",
    },
  },
}));

export default MenuCard;
