import React from "react";
import { Switch, Route } from "react-router-dom";
import cx from "classnames";
import * as Path from "../../constants/pathNames";

// mui
import { makeStyles } from "@material-ui/core/styles";

// components
import SideMenu from "../../components/layouts/SideMenu";
import MySchedule from "./MySchedule";

const ScheduleHomePage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <SideMenu open={open} setOpen={setOpen} />

      <section
        className={cx(classes.section, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
      >
        <Switch>
          <Route exact path={Path.MY_SCHEDUEL} component={MySchedule} />
        </Switch>
      </section>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    width: "calc(100vw - 240px)",
    height: "calc(100vh - 56px)",
    top: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      top: theme.spacing(8),
      height: "calc(100vh - 64px)",
    },
    float: "right",
  },
  drawerOpen: {
    width: "calc(100vw - 240px)",
    marginLeft: 240,
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
    width: "calc(100vw - 48px)",
    marginLeft: 48,
    [theme.breakpoints.up("sm")]: {
      width: "calc(100vw - 72px)",
      marginLeft: 72,
    },
  },
}));
export default ScheduleHomePage;
