import React from "react";
import cx from "classnames";

//mui
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";

//icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// components
import SideMenuList from "./SideMenuList";

const SideMenu = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <Drawer
      variant="permanent"
      elevation={3}
      classes={{
        paper: cx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <SideMenuList />
      <IconButton onClick={() => setOpen(!open)} className={classes.chevron}>
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </Drawer>
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
  chevron: {
    color: theme.palette.primary.contrastText,
    width: "3rem",
  },
}));

export default SideMenu;
