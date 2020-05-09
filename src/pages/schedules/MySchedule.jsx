import React from "react";

// mui
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// components
import TopPane from "../../components/schedules/home/TopPane";
import BottomLeftPane from "../../components/schedules/home/BottomLeftPane";
import BottomRightPane from "../../components/schedules/home/BottomRightPane";

// redux
import { connect } from "react-redux";
import { getMySchedule } from "../../redux/actions/scheduleAction";

const MySchedule = ({ getMySchedule, user, schedule }) => {
  const classes = useStyles();
  const { loading } = user;

  React.useEffect(() => {
    if (!loading) {
      getMySchedule();
    }
  }, [loading, getMySchedule]);

  return (
    <Container component="article" maxWidth="md" className={classes.container}>
      <TopPane schedule={schedule} />
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

const mapStateToProps = (state) => ({
  user: state.employee.user,
  schedule: state.schedule,
});

const mapActionsToProps = {
  getMySchedule,
};

export default connect(mapStateToProps, mapActionsToProps)(MySchedule);
