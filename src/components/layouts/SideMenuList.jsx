import React from "react";
import { NavLink } from "react-router-dom";

//mui
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { userMenu, scheduleViewList, companyMenu } from "./sideMenuContents";

const SideMenuList = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        <NavLink to={userMenu.path} activeClassName={classes.activeLink}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              {userMenu.icon}
            </ListItemIcon>
            <ListItemText primary={userMenu.name} />
          </ListItem>
        </NavLink>
      </List>
      <Divider className={classes.divider} />
      <List>
        {scheduleViewList.map(({ name, icon, path }, index) => (
          <NavLink to={path} key={index}>
            <ListItem button>
              <ListItemIcon className={classes.icons}>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List>
        {companyMenu.map(({ name, icon, path }, index) => (
          <NavLink to={path} key={index}>
            <ListItem button>
              <ListItemIcon className={classes.icons}>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    whiteSpace: "nowrap",
    paddingLeft: "0.5rem",
    top: 56,
    [theme.breakpoints.up("sm")]: {
      top: 64,
    },
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  drawerOpen: {
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  icons: {
    color: "inherit",
  },
  chevron: {
    width: "3rem",
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    width: "90%",
    margin: "0 auto",
  },
  activeLink: {
    color: theme.palette.secondary.main,
  },
}));

export default SideMenuList;
