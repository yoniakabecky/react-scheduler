import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import TopPane from "../../components/schedules/home/TopPane";
import BottomLeftPane from "../../components/schedules/home/BottomLeftPane";
import BottomRightPane from "../../components/schedules/home/BottomRightPane";

const MySchedule = () => {
  const classes = useStyles();

  return (
    <Container component="article" maxWidth="md" className={classes.container}>
      <TopPane />
      <div className={classes.bottom}>
        <BottomLeftPane />
        <BottomRightPane />
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.global.container,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px)",
    },
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
}));

export default MySchedule;
